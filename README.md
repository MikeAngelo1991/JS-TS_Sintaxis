# JavaScript y TypeScript: sintaxis básica

Ejemplos progresivos de sintaxis de JavaScript y su equivalente en TypeScript. El proyecto forma parte del curso de automatización con Playwright.

## Contenido

Cada tema tiene una versión en JavaScript (`.js`) y otra en TypeScript (`.ts`):

| Archivo | Tema |
| --- | --- |
| `basics1` | Variables, tipos primitivos y operadores |
| `basics2` | Condicionales y bucles |
| `basics3` | Arrays, `filter`, `map` y `reduce` |
| `basics4` | Funciones, funciones anónimas y arrow functions |
| `basics5` | Operaciones con strings e importaciones |
| `basics6` | Objetos e interfaces |
| `basics7` | Clases, propiedades, constructor y getter |
| `basics8` | Herencia entre clases |

## Requisitos

- Node.js instalado. Comprueba la instalación con:

```powershell
node --version
npm --version
```

- Para comprobar los archivos TypeScript se puede usar el compilador mediante `npx`. No es necesario instalarlo globalmente.

## Ejecutar JavaScript

Desde la carpeta del proyecto:

```powershell
node basics1.js
node basics2.js
node basics3.js
node basics4.js
node basics5.js
node basics6.js
node basics7.js
node basics8.js
```

## Comprobar TypeScript

El siguiente comando comprueba todos los archivos sin generar archivos JavaScript:

```powershell
npx -y -p typescript tsc --noEmit --target ES2020 --module commonjs basics1.ts basics2.ts basics3.ts basics4.ts basics5.ts basics6.ts basics7.ts basics8.ts
```

Si el comando termina sin mostrar errores, los ejemplos cumplen la comprobación de tipos.

Para ejecutar un archivo TypeScript directamente durante el aprendizaje, puedes usar `tsx` sin instalarlo de forma permanente:

```powershell
npx -y tsx basics3.ts
```

## Diferencias principales en TypeScript

- Los tipos se pueden declarar explícitamente, por ejemplo `let age: number = 25`.
- Los arrays indican el tipo de sus elementos, por ejemplo `number[]` o `string[]`.
- Las funciones pueden declarar tipos para sus parámetros y su valor de retorno.
- Las interfaces describen la forma esperada de un objeto.
- Las clases pueden declarar propiedades, constructores y métodos con tipos.
- Los archivos que no exportan código incluyen `export {}` para tratarlos como módulos independientes y evitar conflictos de nombres al compilarlos juntos.

## MCP de Playwright en VS Code

La configuración del MCP se encuentra en `.vscode/mcp.json`:

```json
{
  "servers": {
    "npx -y @playwright/mcp@latest": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

En VS Code:

1. Abre la paleta de comandos con `Ctrl+Shift+P`.
2. Ejecuta `Developer: Reload Window`.
3. Comprueba el servidor desde la vista de MCP o desde Copilot.

El paquete se descarga mediante `npx` cuando VS Code inicia el servidor; no es necesario añadirlo como dependencia del proyecto para esta configuración.
