export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-light tracking-tight">Contact</h1>
      <p className="mt-2 text-sm text-stone-600">
        Studio enquiries, repairs and returns. We reply within two working days.
      </p>

      <form className="mt-12 space-y-6" data-testid="contact-form">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-[0.2em] text-stone-500"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 w-full border-b border-stone-300 bg-transparent py-2 text-sm outline-none focus:border-stone-900"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.2em] text-stone-500"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full border-b border-stone-300 bg-transparent py-2 text-sm outline-none focus:border-stone-900"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.2em] text-stone-500"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full border-b border-stone-300 bg-transparent py-2 text-sm outline-none focus:border-stone-900"
          />
        </div>
        <button
          type="submit"
          data-testid="contact-submit"
          className="bg-stone-900 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-stone-700"
        >
          Send message
        </button>
      </form>

      <div className="mt-16 grid gap-8 text-sm text-stone-600 sm:grid-cols-2">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-stone-900">
            Studio
          </h2>
          <p className="mt-2">Rua das Flores 42, Porto</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-stone-900">
            Email
          </h2>
          <p className="mt-2">studio@lumina-apparel.test</p>
        </div>
      </div>
    </section>
  );
}
