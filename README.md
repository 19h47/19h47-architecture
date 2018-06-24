# Architecture

An opinionated SCSS architecture based on [Hugo Giraudel](https://github.com/HugoGiraudel)'s work.

![Architecture](architecture.png)

## Dependencies

- [Bootstrap 4.1.1](https://github.com/twbs/bootstrap), we only load the grid for convenience (see the [bootstrap-custom](https://github.com/19h47/architecture/blob/master/assets/stylesheets/vendors/_bootstrap-custom.scss) and the [bootstrap-custom-variables](https://github.com/19h47/architecture/blob/master/assets/stylesheets/vendors/_bootstrap-custom-variables.scss) file)
- [Ress](https://github.com/filipelinhares/ress), a modern CSS reset

## Tasks

### Watch

```
npm run sass:watch
```

### Prod

Autoprefixer and compressed

```
npm run prod
```

## References

- [Sass Guidelines](https://sass-guidelin.es/#architecture)
