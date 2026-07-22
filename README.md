# Landing Page — Sabre Odonto (nova identidade)

Landing page estática (HTML + CSS + JS puro, sem build) apresentando a
**nova identidade visual** da Sabre Odonto (Gravataí/RS) — reformulação de
marca em torno do conceito "dente-de-sabre transformado em objeto de
valor", em comemoração aos 20 anos da clínica.

Identidade visual própria deste projeto — dourado/champagne sobre fundo
claro e "sedoso", tipografia elegante (Marcellus + Plus Jakarta Sans) —
deliberadamente diferente (e mais clara) que os três projetos anteriores,
que usavam fundos escuros.

## Estrutura da página (pensada para conversão)

A ordem das seções foi ajustada para priorizar a conversão: quem entra no
site vê primeiro a proposta de valor, especialidades, resultados, equipe
e depoimentos. A história da marca aparece logo após a localização (bem
visível, não escondida), e o CTA final dourado fica reservado para o
fechamento da página, como último empurrão antes do rodapé.

1. Hero + barra de estatísticas (20 anos, 6 sócios, 9 especialidades)
2. Diferenciais (Odontologia Inteligente)
3. Especialidades
4. Resultados (antes/depois)
5. Equipe (6 sócios)
6. Depoimentos
7. Localização
8. Nossa história (evolução da marca)
9. Instagram (prévia do feed + estatísticas do perfil)
10. CTA final (agende sua consulta)
11. Rodapé

As fotos de joia (pingente e mãos lapidando um anel) foram removidas —
a seção "Nossa história" agora usa a foto real do tigre-dente-de-sabre
para ilustrar o conceito, sem parecer uma loja de joias.

## Estrutura

```
site4/
├── index.html
├── styles.css
├── script.js
├── README.md
├── img/
│   ├── hero-poster.jpg
│   ├── logo-icon.png
│   ├── logo-sabre.jpg
│   ├── simbolo-tigre.jpg
│   ├── diferenciais-atendimento.jpg
│   ├── diferenciais-premio.jpg
│   ├── instagram-feed.png
│   ├── cuidado-humano-aligner.jpg
│   ├── historia-fundadora.jpg
│   ├── resultado-1.jpg
│   ├── resultado-2.jpg
│   ├── resultado-3.jpg
│   ├── resultado-4.jpg
│   ├── socio-renato.jpg
│   ├── socio-samantha.jpg
│   ├── socio-daniel.jpg
│   ├── socio-anna.jpg
│   ├── socio-thiago.jpg
│   └── socio-barbara.jpg
└── video/
    └── hero.mp4
```

## Publicar no GitHub e Vercel

```bash
git init
git add .
git commit -m "Landing page Sabre Odonto - nova identidade"
git branch -M main
git remote add origin <url-do-seu-repositorio>
git push -u origin main
```

No Vercel: **Add New Project** → importar o repositório → Framework preset
**Other** → Build Command vazio → Output Directory raiz (`.`) → Deploy.

## De onde veio cada informação

- **Site atual** (gravatai.sabreodonto.com.br): serviços, equipe (nomes e
  CRO), depoimentos de pacientes, telefones, endereço, horário de
  funcionamento — nada disso muda com a reformulação de marca, então foi
  todo reaproveitado.
- **Sequência de posts sobre a nova identidade** (enviada por você): a
  história da marca (2006 RS Saúde → 2010 SABRE → evolução aos 10 anos →
  nova identidade aos 20 anos), o conceito do dente-de-sabre/joia, e as
  fotos reais (conceito, "toque humano", fundadora).
- **Fotos e frases dos 6 sócios** (enviadas por você): Renato Cremonese,
  Samantha Moraes Rangel, Daniel Haddad, Anna Baumgarten, Thiago Ribeiro
  e Bárbara Langsch — cada um com foto, cargo e frase pessoal, extraídos
  dos posts reais do Instagram sobre a equipe.
- **Vídeo do Hero**: cortado para os primeiros 9 segundos, sem áudio (já
  que toca em loop e mudo), como pedido.
- **Bio e feed do Instagram @sabreodonto** (enviados por você): frase de
  posicionamento ("Humanidade, excelência e confiança..."), estatísticas
  do perfil (446 posts, 6,2 mil seguidores), a frase real da campanha
  "Há clínicas que atendem. E há instituições que fazem odontologia de
  verdade.", a frase sobre os sócios ("Pelo nome. Pela história. Pela
  especialidade."), e fotos reais (atendimento, reconhecimento recebido
  pela equipe) usadas na seção Diferenciais.

## Sobre o logotipo

O logotipo oficial que vocês enviaram já está em uso: o ícone recortado
(`img/logo-icon.png`) aparece no menu, e o lockup completo
(`img/logo-sabre.jpg`) aparece no rodapé.

## O que falta preencher/confirmar

Nenhuma pendência marcada no momento — todas as informações usadas no
site foram confirmadas por você (site atual, sequência de identidade,
fotos dos sócios e bio/feed do Instagram).

## Personalização rápida

- **WhatsApp**: configurado como `5551991584247` (mesmo do site atual) —
  buscar e substituir em `index.html` se mudar.
- **Cores**: variáveis no topo de `styles.css` (`:root`).
- **Fontes**: Marcellus (títulos) e Plus Jakarta Sans (texto), via Google
  Fonts.
