import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/product/$postId/edit')({
  component: Product,
})

function Product() {
  return <div>Hello "/product/$postId"!</div>
}
