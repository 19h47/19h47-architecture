# Architecture

[![devDependencies Status](https://david-dm.org/19h47/architecture/dev-status.svg)](https://david-dm.org/19h47/architecture?type=dev)
[![dependencies Status](https://david-dm.org/19h47/architecture/status.svg)](https://david-dm.org/19h47/architecture)

An opinionated SCSS architecture based on [Hugo Giraudel](https://github.com/HugoGiraudel)'s work.

![Architecture](architecture.png)

## Dependencies

- [Bootstrap 4.3.1](https://github.com/twbs/bootstrap), we only load the grid for convenience (see the [bootstrap-custom](https://github.com/19h47/architecture/blob/master/assets/stylesheets/vendors/_bootstrap-custom.scss) and the [bootstrap-custom-variables](https://github.com/19h47/architecture/blob/master/assets/stylesheets/vendors/_bootstrap-custom-variables.scss) files)
- [Ress](https://github.com/filipelinhares/ress), a modern CSS reset

## [Utilities variables](https://github.com/19h47/architecture/blob/master/src/stylesheets/utilities/_variables.scss)

Use is as it or overide it!

```scss

$cursor: none cursor;
$text-transforms: uppercase;
$displays: block inline-block inline none;
$floats: left;
$style-types: none;
$overflow-values: hidden visible;
$positions: relative;
$size-dimensions: 50 100;
$text-aligns: center;
$vertical-aligns: middle bottom;
$visibilities-displays: inline-block block inline;
$white-space-values: nowrap;
$letters-spacings: 50;

```

## Tasks

### Development

```bash
npm run dev
```

### Production

Autoprefixer and compressed

```bash
npm run prod
```

### Server

```bash
npm run start
```

## References

- [Sass Guidelines](https://sass-guidelin.es/#architecture)
