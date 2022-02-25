
const getSigns = async () => {
    const res = await fetch('http://sandipbgt.com/theastrologer/api/sunsigns/')
  return await res.json()
}

export const getHoroscope = async (sign, date) => {
  const response = await fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${date}/`)
  const horoscope = await response.json()
  console.log(horoscope)
  return horoscope
}

export default getSigns
