export const exportElementToPdf = async (element: HTMLElement, fileName: string) => {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    windowWidth: element.scrollWidth,
  })

  const imageData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = 210
  const pageHeight = 297
  const margin = 8
  const usableWidth = pageWidth - margin * 2
  const usableHeight = pageHeight - margin * 2
  const imageHeight = (canvas.height * usableWidth) / canvas.width

  if (imageHeight <= usableHeight) {
    pdf.addImage(imageData, 'PNG', margin, margin, usableWidth, imageHeight)
  } else {
    const pageCanvas = document.createElement('canvas')
    const pageContext = pageCanvas.getContext('2d')
    const pxPerPage = (usableHeight * canvas.width) / usableWidth
    let renderedHeight = 0
    let firstPage = true

    if (!pageContext) {
      throw new Error('Could not initialize PDF rendering context.')
    }

    while (renderedHeight < canvas.height) {
      const sliceHeight = Math.min(pxPerPage, canvas.height - renderedHeight)
      pageCanvas.width = canvas.width
      pageCanvas.height = sliceHeight
      pageContext.clearRect(0, 0, pageCanvas.width, pageCanvas.height)
      pageContext.drawImage(
        canvas,
        0,
        renderedHeight,
        canvas.width,
        sliceHeight,
        0,
        0,
        pageCanvas.width,
        pageCanvas.height,
      )

      const pageImage = pageCanvas.toDataURL('image/png')
      const currentPageHeight = (sliceHeight * usableWidth) / canvas.width

      if (!firstPage) {
        pdf.addPage()
      }

      pdf.addImage(pageImage, 'PNG', margin, margin, usableWidth, currentPageHeight)
      renderedHeight += sliceHeight
      firstPage = false
    }
  }

  pdf.save(fileName)
}
