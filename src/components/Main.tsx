import Link from "next/link"

export function Main() {
    return (
    <main className="flex flex-col justify-around py-3 px-5 py-5 md:px-12 md:py-12 mx-auto pb-6">
      <p className="text-lg">Hello, my name is</p>
      <h1 className="text-2xl text-blue-700">Thomas</h1>
      <p className="mb-2">
        and I&apos;m a{" "}
        <span className="text-xl font-serif font-bold text-text-red px-1">
          frontend developer
        </span>
      </p>
      <Link href={"/projects"}>
        <button className="max-w-xs bg-btn-more px-8 py-2 rounded text-white text-lg uppercase mt-2 hover:bg-btn-more-hover">Read more</button>
      </Link>
      <div className="flex justify-end my-3">
        <img
          src="/images/elvehavn_1.jpg"
          alt="landing page image"
          width="180"
          height="180"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <img
          src="/images/landing-page.png"
          alt="landing page icon"
          className="max-w-xs animate-slide mb-4"
          width="512"
          height="512"
        />
              <Link href="https://www.flaticon.com/free-icons/landing-page"
              className="text-sm mt-4 animate-slide mx-10">
                Cms icons created by Freepik - Flaticon
              </Link>
      </div>
    </main>
    )
}