export default function Video({ src }) {
  return (
    <video
      muted
      autoPlay
      playsInline
      loop
      controls
      className="mt-6 rounded-xl border dark:border-zinc-800"
      style={{"marginTop":"1.5rem","borderRadius":"0.75rem","borderWidth":"1px"}}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
