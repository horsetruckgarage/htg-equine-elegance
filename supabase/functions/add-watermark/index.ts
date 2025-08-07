import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const formData = await req.formData()
    const imageFile = formData.get('image') as File
    
    if (!imageFile) {
      return new Response(
        JSON.stringify({ error: 'No image file provided' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Load the watermark logo
    const logoResponse = await fetch(`${req.url.split('/functions')[0]}/lovable-uploads/cf145a57-409b-41c6-9c1d-bc4fb00db3ed.png`)
    const logoBuffer = await logoResponse.arrayBuffer()

    // Create canvas elements
    const canvas = new OffscreenCanvas(1024, 768)
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('Could not get canvas context')
    }

    // Load and draw the main image
    const imageBuffer = await imageFile.arrayBuffer()
    const imageBlob = new Blob([imageBuffer])
    const imageBitmap = await createImageBitmap(imageBlob)

    // Set canvas size to match image
    canvas.width = imageBitmap.width
    canvas.height = imageBitmap.height

    // Draw main image
    ctx.drawImage(imageBitmap, 0, 0)

    // Load and draw watermark
    const logoBlob = new Blob([logoBuffer])
    const logoBitmap = await createImageBitmap(logoBlob)

    // Calculate watermark size (15% of image width, maintaining aspect ratio)
    const watermarkSize = Math.min(canvas.width * 0.15, 150)
    const logoAspectRatio = logoBitmap.width / logoBitmap.height
    const watermarkWidth = watermarkSize
    const watermarkHeight = watermarkSize / logoAspectRatio

    // Position watermark plus haut (augmentation du padding vertical)
    const padding = 20
    const verticalPadding = 80 // Plus de padding vertical pour remonter le logo
    const x = canvas.width - watermarkWidth - padding
    const y = canvas.height - watermarkHeight - verticalPadding

    // Set transparency for watermark (plus visible)
    ctx.globalAlpha = 0.8

    // Draw watermark
    ctx.drawImage(logoBitmap, x, y, watermarkWidth, watermarkHeight)

    // Reset transparency
    ctx.globalAlpha = 1.0

    // Convert canvas to blob
    const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: 0.9 })

    return new Response(blob, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'image/jpeg',
      },
    })

  } catch (error) {
    console.error('Error adding watermark:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to add watermark', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})