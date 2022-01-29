export const Pages = {
  Shapes: () => import('@Shapes/pages/shapes').then((m) => m.default || m),
  Shape: () =>
    import('@Shapes/pages/shapes/shape/_id').then((m) => m.default || m),
}
