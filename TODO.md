# TODO

## FEATURE: Vocabulary

Requerimientos:

- Implementar tooltip flotante usando context para mostrar definiciones de palabras clave.

- Implementar vocabulario flotante de tal forma que pueda ser usado en otras paginas fuera de la seccion de vocabulario

- Generar un componente que funcione como "biblioteca" de vocabularios:

    + El componente recibe como parametro la palabra

    + Retorna un div con la palabra destacada 

    + Al hacer hover despliega tooltip con defincion e imagen de la palabra 

    + Si se pincha la palabra el tooltip se queda abierto hasta que el usuario lo cierre

##

### Tareas
 
---

#### Etapa 1

- [x] Crear un componente funcione como wrapper de la palabra
- [x] css:
  + [x] palabra en negrita y subrayada
  + [x] cambio de color on hover
  + [x] cambio de cursor on hover
- [x] crear componente de tooltip flotante

---

#### Etapa 2

- [x] Crear un provider para gestionar tooltip
- [x] Implementar provider en disclaimer
- [x] hacer que el tooltip aparezca debajo de la palabra
- [x] hacer que el tooltip mantenga posicion al hacer scroll
- [x] tomar palabra desde el contenido del ref
- [x] crear biblioteca de palabras
- [x] añadir secciones de imagenes al tooltip
- [x] agregar carousel de imagenes al tooltip

---
### ETAPA 3

- [x] crear pagina vocabulary
- [x] listar todas las palabras dentro de vocabulary
- [x] listar imagenes por cada palabra
- [ ] generar algun elemento que envuelva todo el texto y envuelva automaticamente en el componente slang las palabras del contenido que tengan match con la libreria
- [ ] modificar componente carousel para permitir dimensiones dinamicas y reutilizarlo en /vocabulary
- [ ] dar estilos:
   - [ ] gap entre slangs
   - [ ] subtitulo
   - [ ] organizar descripcion e imagenes

#
#
## BACKLOG
