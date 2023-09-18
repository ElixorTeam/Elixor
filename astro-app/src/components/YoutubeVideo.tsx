const YOUTUBE_URL = 'https://www.youtube.com'

export default function YoutubeVideo() {
  const videoID = 'VpNoZ70wDEg'
  return (
    <iframe
      src={`${YOUTUBE_URL}/embed/${videoID}`}
      allowfullscreen
      class="mt-10 aspect-video w-full max-w-md border-none px-5 md:mt-16 md:max-w-3xl"
    />
  )
}
