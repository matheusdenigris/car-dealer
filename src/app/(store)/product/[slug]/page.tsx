import Image from 'next/image'
import { api } from '@/data/api'
import { Product } from '@/types/products'
import { Metadata } from 'next'
interface ProductProps {
  params: Promise<{
    slug: string
  }>
}
async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`)
  const product = await response.json()
  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct((await params).slug)
  return {
    title: product.title,
  }
}

export default async function ProductPage(props: { params: ProductProps['params'] }) {
  const params = await props.params;
  const product = await getProduct(params.slug)
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden flex justify-center">
        <Image
          src={product.image}
          alt=""
          width={600}
          height={800}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
         <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('us', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
          <span className="text-sm text-zinc-400">
            12x/
            {(product.price / 12).toLocaleString('us', {
                style: 'currency',
                currency: 'USD',
              })}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">installments</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              3x
            </button>
            <button
              type="button"
              className="flex h-9 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              6x
            </button>
            <button
              type="button"
              className="flex h-9 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              9x
            </button>
            <button
              type="button"
              className="flex h-9 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              12x
            </button>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          BUY
        </button>
      </div>
    </div>
  )
}