import tile from '../../shared/components/tile'

export default ({x, y}) => tile({x, y, stripeCount: Math.floor((x + y + 2) / 2)})