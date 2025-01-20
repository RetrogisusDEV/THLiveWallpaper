// Supongamos que tienes un archivo JS con el texto que deseas mostrar
const codeText = `
Version 2.1 TLW
- Mejoras de [UI] y [UX].
- Corrección de errores.
- Mejoras de rendimiento (Mentida, pero es una mejora).
- Nuevas características (a medias, pero son nuevas).
- Corrección de errores (otra vez).
- Animaciones más suaves. (No es un bug, es una mejora).
- Corrección de errores (¿Alguien se está riendo al menos?).

Nota : Para la proxima si intentare subirlo a workshop... 
x : pero y la V1? 
Dev : Ya es lost Mrd
`;

const codeBlock = document.getElementById('codeBlock');

codeBlock.innerText = codeText;