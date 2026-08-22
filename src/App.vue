<template>
  <div class="app">

    <header class="navbar">

      <RouterLink to="/" class="logo">
        SummerTech
      </RouterLink>

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/tienda">Tienda</RouterLink>
        <RouterLink to="/proyectos">Proyectos</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
      </nav>

      <RouterLink to="/carrito" class="cart">
        🛒 Carrito
      </RouterLink>

    </header>

    <RouterView />

    <footer class="footer">
      <strong>SummerTech</strong>

      <p>
        Electrónica • IoT • Software • IA
      </p>
    </footer>

  </div>
</template>