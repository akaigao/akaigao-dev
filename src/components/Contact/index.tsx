export function Contact() {
  return (
    <section className="flex flex-col gap-2 w-auto h-auto py-28 p-14 mx-4 text-center text-white border-t-2 border-b-2 border-zinc-800">
      <h3 className="md:text-4xl md:leading-snug text-2xl text-white lg:px-48 md:px-36">
        Passionate about software development, I love everything related to
        technology. If you think I can help, let's talk about it!
      </h3>
      <p className="text-base text-white">
        <a href="mailto:akaigao.dev@gmail.com" className="underline font-bold">
          akaigao.dev@gmail.com
        </a>{" "}
        or LinkedIn for quick response.
      </p>
    </section>
  );
}
