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

    // Position watermark au centre de l'image
    const x = (canvas.width - watermarkWidth) / 2
    const y = (canvas.height - watermarkHeight) / 2

    // Ajouter un fond semi-transparent derrière le logo (centré)
    const backgroundPadding = 15
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)' // Fond blanc plus opaque pour le centre
    ctx.fillRect(
      x - backgroundPadding, 
      y - backgroundPadding, 
      watermarkWidth + (backgroundPadding * 2), 
      watermarkHeight + (backgroundPadding * 2)
    )
    
    // Ajouter une bordure subtile
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.lineWidth = 1
    ctx.strokeRect(
      x - backgroundPadding, 
      y - backgroundPadding, 
      watermarkWidth + (backgroundPadding * 2), 
      watermarkHeight + (backgroundPadding * 2)
    )

    // Set transparency for watermark (logo complètement opaque)
    ctx.globalAlpha = 1.0

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