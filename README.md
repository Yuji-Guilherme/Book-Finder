![funcionamento](https://user-images.githubusercontent.com/102609444/219921867-eec668d9-6bfd-4f3e-b70c-422b89b6ead5.gif)

## Resumo do projeto
Aplicativo web que busca um livro utilizando a [Google Books API](https://developers.google.com/books?hl=pt-br). Visando a prática de JavaScript, JQuery e Bootstrap.

### Funcionamento
Ao pesquisar por um livro o site disponibiliza: 
1. Capa do livro.
2. Informações do livro:
    - título
    - autor
    - editora
    - data de publicação  
    - número de páginas
3. Link para preview no Google Books.

## Tecnologias utilizadas
- ``HTML``
- ``CSS``
- ``JavaScript``
- ``JQuery``
- ``Bootstrap``

## 📘 Número de livros buscados
É possível alterar o número de livros que serão requisitados, alterando a variável:
~~~javascript 
const qtyBook = n
~~~
em [request-api.js](https://github.com/Yuji-Guilherme/Book-Finder/blob/main/script/request-api.js), ' n ' sendo um número de 1 a 40 (máximo permitido pela API).
> por padrão n tem o valor 10.
