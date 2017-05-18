import tile from '../../shared/components/tile'

export default ({ x, y }) => { if (x % 2 === y % 2) tile({ x, y }) }