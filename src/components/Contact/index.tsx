export function Contact() {
  return (
    <div className="flex flex-col gap-2 w-auto h-auto py-28 p-14 text-center text-white border-t-2 border-b-2 border-gray-800">
      <p className="md:text-4xl md:leading-snug text-2xl text-white lg:px-48 md:px-36">
        Passionate about software development, I love everything related to
        technology. If you think I can help, let's talk about it!
      </p>
      <p className="text-base text-white">
        <a href="mailto:akaigao.dev@gmail.com" className="underline font-bold">
          akaigao.dev@gmail.com
        </a>{" "}
        or LinkedIn for quick response.
      </p>
    </div>
  );
}
