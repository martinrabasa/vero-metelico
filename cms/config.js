module.exports = {
  cms_manual_init: true,
  local_backend: true,
  backend: {
    name: "git-gateway",
    branch: "main",
    squash_merges: true,
  },
  locale: "es",
  media_folder: "public/images/",
  public_folder: "images/",
  collections: [
    {
      label: "Obras",
      name: "posts",
      folder: "/public/data/posts",
      create: true,
      identifier_field: "title",
      format: "json",
      fields: [
        { label: "Titulo", name: "title", widget: "string" },
        {
          label: "Slug",
          name: "slug",
          widget: "string",
          hint: "El slug es un fragmento de texto unico (sin tildes) separado por guiones que va a ser usado en el URL para identificar esta página. 'primer-cuento' es el slug de veronicametelico.com/obra/primer-cuento",
        },
        {
          label: "Categoría",
          name: "category",
          widget: "relation",
          collection: "categories",
          search_fields: ["name"],
          display_fields: ["name"],
          value_field: "name",
        },
        { label: "Contenido", name: "content", widget: "markdown" },
        {
          label: "Publish date",
          name: "publish_date",
          widget: "datetime",
          date_format: true,
          time_format: true,
          format: "LLL",
          picker_utc: false,
        },
      ],
    },
    {
      label: "Categorías",
      name: "categories",
      folder: "public/data/categories",
      create: true,
      identifier_field: "name",
      format: "json",
      fields: [{ label: "Nombre", name: "name", widget: "string" }],
    },
    {
      label: "Obras de Invitados",
      name: "invitados",
      folder: "/public/data/invitados",
      create: true,
      identifier_field: "title",
      format: "json",
      fields: [
        { label: "Titulo", name: "title", widget: "string" },
        {
          label: "Slug",
          name: "slug",
          widget: "string",
          hint: "El slug es un fragmento de texto unico separado por guiones que va a ser usado en el URL para identificar esta página. 'primer-cuento' es el slug de veronicametelico.com/obra/primer-cuento",
        },
        {
          label: "Autor",
          name: "author",
          widget: "relation",
          collection: "authors",
          search_fields: ["name"],
          display_fields: ["name"],
          value_field: "name",
        },
        {
          label: "Categoría",
          name: "category",
          widget: "relation",
          collection: "categories",
          search_fields: ["name"],
          display_fields: ["name"],
          value_field: "name",
        },
        { label: "Contenido", name: "content", widget: "markdown" },
        {
          label: "Publish date",
          name: "publish_date",
          widget: "datetime",
          date_format: true,
          time_format: true,
          format: "LLL",
          picker_utc: false,
        },
      ],
    },
    {
      label: "Autores Invitados",
      name: "authors",
      folder: "public/data/authors",
      create: true,
      identifier_field: "name",
      format: "json",
      fields: [{ label: "Nombre", name: "name", widget: "string" }],
    },
    {
      label: "Escritura Grupal",
      name: "escritura-grupal",
      folder: "/public/data/escritura-grupal",
      create: true,
      identifier_field: "title",
      format: "json",
      fields: [
        { label: "Titulo", name: "title", widget: "string" },
        {
          label: "Slug",
          name: "slug",
          widget: "string",
          hint: "El slug es un fragmento de texto unico separado por guiones que va a ser usado en el URL para identificar esta página. 'primer-cuento' es el slug de veronicametelico.com/obra/primer-cuento",
        },
        { label: "Contenido", name: "content", widget: "markdown" },
        {
          label: "Publish date",
          name: "publish_date",
          widget: "datetime",
          date_format: true,
          time_format: true,
          format: "LLL",
          picker_utc: false,
        },
      ],
    },
  ],
};
