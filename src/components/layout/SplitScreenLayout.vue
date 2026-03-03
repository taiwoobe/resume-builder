<template>
  <main class="app-shell">
    <aside class="info-panel">
      <slot name="info" />
    </aside>
    <section class="workspace-panel">
      <slot />
    </section>
  </main>
</template>
