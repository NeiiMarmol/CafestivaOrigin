# Guía de Despliegue en Vercel - Cafestiva Origin

## 🚀 Opción 1: Despliegue desde GitHub (Recomendado)

Esta es la forma más fácil y permite actualizaciones automáticas:

### Paso 1: Subir tu código a GitHub
```bash
# Inicializar Git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit - Cafestiva Origin PWA"

# Crear un repositorio en GitHub y luego:
git remote add origin https://github.com/TU-USUARIO/cafestiva-origin.git
git push -u origin main
```

### Paso 2: Importar en Vercel
1. Ve a https://vercel.com y crea una cuenta (puedes usar GitHub)
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en "Deploy"
6. ¡Listo! Tu app estará en línea en unos minutos

**Ventaja**: Cada vez que hagas cambios y los subas a GitHub, Vercel desplegará automáticamente la nueva versión.

---

## 🖥️ Opción 2: Despliegue Manual desde la Terminal

Si prefieres desplegar directamente desde tu computadora:

### Paso 1: Instalar Vercel CLI globalmente
```bash
npm install -g vercel
```

### Paso 2: Login en Vercel
```bash
vercel login
```
Esto abrirá tu navegador para que inicies sesión con Vercel.

### Paso 3: Desplegar
```bash
# Desde la carpeta del proyecto
vercel

# Para desplegar a producción
vercel --prod
```

Sigue las instrucciones en pantalla:
- Set up and deploy? → Yes
- Which scope? → Selecciona tu cuenta
- Link to existing project? → No
- Project name? → cafestiva-origin (o el que prefieras)
- In which directory is your code? → ./ (presiona Enter)
- Override settings? → No

---

## 📱 Después del Despliegue

Una vez desplegada, Vercel te dará una URL como:
```
https://cafestiva-origin.vercel.app
```

### Para compartir la app con tus clientes:

1. **Comparte el enlace** directamente
2. **Crea un código QR** con el enlace (usa https://qr-code-generator.com)
3. Los usuarios podrán **instalar la PWA** directamente desde el navegador

### Configurar dominio personalizado (Opcional)

Si tienes un dominio (ejemplo: www.cafestivaorigin.com):

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar el DNS

---

## ✅ Verificar que la PWA funciona

Después del despliegue:

1. Abre la URL en Chrome en tu celular
2. Deberías ver un mensaje "Agregar a la pantalla de inicio"
3. Instala la app
4. Verifica que el ícono de Cafestiva Origin aparezca
5. Abre la app - debe verse en pantalla completa

---

## 🔄 Actualizar la Aplicación

### Con GitHub (Opción 1):
```bash
git add .
git commit -m "Actualización de productos"
git push
```
Vercel desplegará automáticamente.

### Manual (Opción 2):
```bash
vercel --prod
```

---

## ❓ Solución de Problemas

**Error de build**: Verifica que todos los archivos estén committeados correctamente.

**La PWA no se instala**: Asegúrate de que estás usando HTTPS (Vercel lo proporciona automáticamente).

**Iconos no aparecen**: Verifica que los archivos `/public/icon-192.png` y `/public/icon-512.png` existan.

---

## 📞 Soporte

Si tienes problemas, puedes:
- Consultar la documentación de Vercel: https://vercel.com/docs
- Revisar los logs de despliegue en el dashboard de Vercel
