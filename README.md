# Mural da turma

Repositório do exercício 4 do treinamento de Git.

1. Pegue o número da sua vaga com o instrutor.
2. Rode `git switch develop` e crie a branch `cartao-seunome` a partir dela.
3. No `index.html`, troque **só** a linha `<li class="vazia">Vaga NN</li>` da sua vaga por:

   ```html
   <li><strong>Seu nome</strong> Uma frase sobre você.</li>
   ```

4. Faça commit, `git push -u origin cartao-seunome` e abra o pull request no GitHub, com **base: develop**.

O GitHub Pages publica a `main`. Os cartões aparecem no mural publicado depois do release, quando o instrutor junta a `develop` na `main`.

O `componentes.html` é do exercício 5: os cartões saem de uma função `Cartao` em JavaScript. Abra o arquivo direto no navegador.
