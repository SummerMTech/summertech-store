<template>
    <main>
        <section class="hero">
            <p class="eyebrow"> ELECTRÓNICA · IoT · SOFTWARE </p>
            <h1> 
                Tecnologia para
                <span> crear tus ideas. </span>
            </h1>

            <p class = "description">
                Componentes electronicos, proyectos y desarrollo
                personalizado para convertir tus ideas en soluciones reales.
            </p>

            <div class = "actions">
                <RouterLink to="/tienda" class="btn primary">
                    Explorar tienda
                </RouterLink>
                <RouterLink to="/servicios" class = "btn secundary">
                    Solicitar Proyecto
                </RouterLink>
            </div>
        </section>

        <section class="section">
            <h2>  Que hacemos? </h2>
            <div class = "cards">
                <article>
                    <span>🔌</span>
                    <h3>Componentes</h3>
                    <p>
                        Componentes electrónicos para tus proyectos.
                    </p>
                </article>

                <article>
                <span>🤖</span>
                <h3>Proyectos</h3>
                <p>
                    Soluciones IoT, robótica y automatización.
                </p>
                </article>

                <article>
                <span>🛠️</span>
                <h3>Desarrollo</h3>
                <p>
                    Diseñamos y desarrollamos tus ideas.
                </p>
                </article>
            </div>
        </section>

    </main>
</template>
