![Funcionamento](https://user-images.githubusercontent.com/102609444/219513026-eee5e677-6aed-46e7-ab3c-8722082d9e0b.gif)

## Resumo do projeto
Aplicativo web que busca um livro utilizando a [Google Books API](https://developers.google.com/books?hl=pt-br). Visando a prática de JavaScript e Bootstrap.

### Funcionamento
Ao pesquisar por um livro o site disponibiliza: 
1. Capa do livro.
2. Informações do livro:
    - título
    - autor
    - editora
    - data de publicação  
    - número de páginas
3. Link para preview.

## Tecnologias utilizadas
- ``HTML``
- ``CSS``
- ``JavaScript``
- ``Bootstrap``

## 📘 Número de livros buscados
É possível alterar o número de livros que serão requisitados, alterando a variável:
~~~javascript 
const qtyBook = n
~~~
em [request-api.js](https://github.com/Yuji-Guilherme/Book-Finder/blob/main/script/request-api.js), ' n ' sendo um número de 1 a 40 (máximo permitido pela API).
> por padrão n tem o valor 10.
