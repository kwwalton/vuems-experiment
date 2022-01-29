import { Pages } from './imports'

export const ROUTE_NAME = {
  SHAPES: 'shapes',
  SHAPE: 'shape',
}

export default [
  {
    name: ROUTE_NAME.SHAPES,
    path: '/shapes',
    component: Pages.Shapes,
  },
  {
    name: ROUTE_NAME.SHAPE,
    path: '/shapes/shape/:id',
    component: Pages.Shape,
  },
]
