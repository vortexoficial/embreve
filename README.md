# K2 Business Landing Page

## Estrutura de Arquivos

Para usar este projeto, organize os arquivos da seguinte forma:

```
k2-business-landing/
├── k2-business-landing.html
├── assets/
│   ├── k2-logo.png          (sua logo PNG)
│   └── k2-video.mp4         (seu vídeo MP4 - opcional)
└── README.md
```

## Instruções de Instalação

1. **Baixe o arquivo HTML**: `k2-business-landing.html`
2. **Crie a pasta assets**: Crie uma pasta chamada `assets` no mesmo diretório do arquivo HTML
3. **Adicione sua logo**: Coloque sua logo PNG na pasta `assets` com o nome `k2-logo.png`
4. **Adicione o vídeo (opcional)**: Se tiver um vídeo MP4, coloque na pasta `assets` com o nome `k2-video.mp4`

## Como Adicionar o Vídeo

Quando você tiver o arquivo de vídeo MP4:

1. Coloque o arquivo na pasta `assets/` com o nome `k2-video.mp4`
2. No arquivo HTML, descomente as linhas do vídeo:

```html
<!-- Descomente estas linhas para mobile: -->
<video id="mobile-video" class="w-full h-full object-cover" playsInline preload="metadata" poster="">
    <source src="./assets/k2-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<!-- Descomente estas linhas para desktop: -->
<video id="desktop-video" class="w-full h-full object-cover" playsInline preload="metadata" poster="">
    <source src="./assets/k2-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

## Características da Landing Page

### Design
- **Responsivo**: Funciona perfeitamente em mobile e desktop
- **Cores**: Texto dourado (#d4af5d) que combina com sua logo
- **Fonte**: Montserrat (carregada via Google Fonts)
- **Layout**: Two-column no desktop, stacked no mobile

### Funcionalidades
- **Loader animado**: Com sua logo e barra de progresso
- **Animações**: Entrada suave de todos os elementos
- **Player de vídeo**: Pronto para receber seu MP4
- **Ícones sociais**: WhatsApp e Instagram com hover effects
- **Copyright**: Incluso no footer

### Tecnologias
- **HTML5**: Estrutura semântica
- **Tailwind CSS**: Framework CSS via CDN
- **JavaScript Vanilla**: Animações e interatividade
- **Google Fonts**: Fonte Montserrat

## Personalização

### Alternar Links Sociais
Edite os links do WhatsApp e Instagram nas linhas com `href="#"`:

```html
<a href="https://wa.me/SEU_NUMERO" class="social-icon text-white">
<a href="https://instagram.com/SEU_PERFIL" class="social-icon text-white">
```

### Modificar Cores
Para alterar a cor dourada, substitua `#d4af5d` por sua cor preferida em todo o arquivo.

### Adicionar Analytics
Adicione seu código do Google Analytics ou outras ferramentas no `<head>` do arquivo.

## Suporte

Este arquivo HTML é totalmente independente e funciona em qualquer servidor web ou pode ser aberto diretamente no navegador.

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar Tailwind CSS e Google Fonts)

### Compatibilidade
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Tablet (iPadOS, Android)