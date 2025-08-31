import { Skeleton } from "@/components/ui/skeleton"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-12 pt-10 text-center md:pt-16">
        <Skeleton className="h-20 w-72" />
        <Skeleton className="h-16 w-96" />
        <Skeleton className="h-6 w-full max-w-2xl" />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
        <Skeleton className="mt-8 h-64 w-full rounded-xl" />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-6">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="mt-2 h-4 w-full" />
              <Skeleton className="mt-1 h-4 w-3/4" />
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
