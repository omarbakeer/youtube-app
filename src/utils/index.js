// Reference
// https://stackoverflow.com/questions/22148885/converting-youtube-data-api-v3-video-duration-format-to-seconds-in-javascript-no

export const parseISO8601Duration = duration => {
  const match = duration.match(/P(\d+Y)?(\d+W)?(\d+D)?T(\d+H)?(\d+M)?(\d+S)?/)
  // An invalid case won't crash the app.
  if (!match) {
    console.error(`Invalid YouTube video duration: ${duration}`)
    return 0
  }
  const [, , , hours, minutes, seconds] = match
    .slice(1)
    .map(n => (n ? parseInt(n.replace(/\D/, '')) : 0))

  return `${hours ? `${hours}:` : ''}${
    minutes < 10 && hours ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`
}
