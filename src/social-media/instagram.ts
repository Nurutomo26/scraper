import FormData from "form-data"
import axios from "axios"
import cheerio from "cheerio"

export async function instagramdl(url: string): Promise<{ thumbnail: Buffer, result: string }> {
    let form = new FormData()
    form.append('url', url)
    form.append('action', 'post')
    const { data } = await axios({
        url: 'https://snapinsta.app/action.php',
        method: 'POST',
        data: form,
        headers: {
            cookie: '_ga=GA1.2.1450546575.1637033620; __gads=ID=68a947f8174e0410-22fc6960b3ce005e:T=1637033620:RT=1637033620:S=ALNI_MbXTvxtxuISyAFMevds6-00PecLlw; _gid=GA1.2.1740129251.1639389841; PHPSESSID=s6v9d60qk41t8mmp15s3cdm1o0; _gat=1; __atuvc=8%7C46%2C0%7C47%2C0%7C48%2C0%7C49%2C4%7C50; __atuvs=61b82670279d8b87001; __atssc=google%3B6',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
            ...form.getHeaders()
        }
    })
    const $ = cheerio.load(data)
    const thumbnail: Buffer = Buffer.from($('div.download-items__thumb > img').attr('src')?.split(';base64,')[1], 'base64')
    let result: string = $('div.download-items__btn > a').attr('href')?.trim()
    if (!/https?:\/\/snapinsta\.app/.test(result)) result = encodeURI('https://snapinsta.app' + result)
    return { thumbnail, result }
}

// export async function instagramstalk() {

// }