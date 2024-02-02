import 'https://deno.land/x/xhr@0.3.0/mod.ts'

Deno.serve(async (req) => {
  const { msg, toNumber } = await req.json()
 return fetch('https://api.twilio.com/INSERT YOUR ACCOUNT HERE/Messages.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${Deno.env.get('BASE64 ENCODED KEY')}`, //simpler than the conventional way
  },
  body: `From=${encodeURIComponent(Deno.env.get('TWILIO_ORIGIN_NUMBER'))}&Body=${encodeURIComponent(msg)}&To=${encodeURIComponent(toNumber)}`,
  })
})

//This accepts recipient number and message as parameters, you can add additional arguments as needed including message schedule and type.
