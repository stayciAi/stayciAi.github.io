const prompts = [

  {
    id: "001",
    title: "Cinematic Automotive Fashion",
    image: "prompt-001.png",
    legacy: true
  },

  {
    id: "002",
    title: "Ruby Rain Luxury Editorial",
    image: "prompt-002.png",
    legacy: true
  },

  {
    id: "003",
    title: "Luxury Elevator Mirror Selfie",
    image: "prompt-003.PNG",
    legacy: true
  },

  {
    id: "004",
    title: "Luxury Lace Elevator Selfie",
    image: "prompt-004.PNG",
    legacy: true
  },

  {
    id: "005",
    title: "Champagne Piano Haute Couture",
    image: "prompt-005.PNG",
    imagePosition: "top",
    legacy: true
  },

  {
    id: "006",
    title: "Cozy Couple Mirror Selfie",
    image: "prompt-006.png",
    legacy: true
  },

  {
    id: "007",
    title: "Convertible Summer Romance",
    image: "prompt-007.png",
    legacy: true
  },

  {
    id: "008",
    title: "Emerald Motorcycle Luxury Editorial",
    image: "prompt-008.PNG",
    legacy: true
  },

  {
    id: "009",
    title: "Turquoise Shark Lagoon",
    image: "prompt-009.PNG",
    legacy: true
  },

  {
    id: "010",
    title: "Morning Pancake Kitchen Editorial",
    image: "prompt-010.PNG",
    legacy: true
  },

  {
  id: "011",
  title: "Elegant Couple Mirror Selfie",
  image: "prompt-011.png",

  positive: `Without changing the appearance or facial features of the people in the photo, this carefully composed scene captures two elegantly dressed figures sharing a quiet, intimate moment.

The man stands slightly behind the woman, looking directly into the camera. His hair is cut short, and he is wearing a simple black shirt with an open collar. The matte texture of the fabric contrasts subtly with the smooth appearance of his skin and his neatly defined light stubble.

The woman is turned slightly to the right, looking into the screen of the smartphone she holds firmly in her right hand. Her expression is focused and confident, emphasizing her elegance and self-assured presence. Her light-colored hair is styled in a neat low bun, beautifully highlighting the refined contours of her neck and face.

She is wearing a fitted black top with a deep neckline that accentuates the graceful line of her collarbones and the elegance of her posture. The material appears smooth, dense, and refined. A small black handbag with a chain strap rests on her left shoulder, adding a sophisticated finishing touch to her look.

Her nails are carefully manicured with a transparent, natural-looking polish. Elegant accessories—including flower-shaped earrings with black stones and a gold ring—add a subtle note of understated luxury and refinement.

The background features a sophisticated interior with white doors and built-in shelving, where shoes and handbags are neatly arranged, creating a sense of spaciousness, organization, and modern elegance.

The lighting is soft and evenly distributed from above and slightly from the side, producing delicate shadows that emphasize the contours of their faces and figures while giving the entire image a warm, intimate atmosphere.

The composition conveys the closeness between the couple, their mutual affection, and the calmness of the moment while preserving exceptional clarity and fine detail throughout the frame. The result is a visually rich, harmonious, and sophisticated image with a natural sense of intimacy.

Photorealistic image, authentic facial features preserved from the reference photo, realistic skin texture, soft cinematic lighting, highly detailed clothing and accessories, natural mirror-selfie aesthetic, sophisticated interior photography, high textural detail, premium image quality, ultra-detailed, 8K resolution.`,

  negative: `different people, changed faces, altered identity, identity drift, face swap, blended identity, generic faces, changed facial features, distorted face, asymmetrical eyes, changed nose, changed lips, changed jawline, unrealistic skin, plastic skin, waxy skin, excessive smoothing, bad anatomy, incorrect body proportions, extra arms, extra legs, duplicate limbs, extra fingers, missing fingers, fused fingers, malformed hands, distorted hands, malformed smartphone, duplicated smartphone, impossible pose, distorted body, cropped face, cropped head, blurry face, wrong hairstyle, messy background, warped doors, distorted shelving, duplicated accessories, malformed handbag, CGI, 3D render, cartoon, illustration, painting, low quality, low resolution, oversaturated colors, harsh lighting, flat lighting, watermark, logo, unwanted text, artifacts, excessive noise, excessive motion blur`
},

{
  id: "012",
  title: "Golden Hour Driver Editorial",
  image: "prompt-012.PNG",

  positive: `Without changing the appearance or facial features of the man in the photo, the scene takes us inside the intimate, cozy interior of a car, where the main subject—a young, athletically built man with a noticeably muscular torso and arms—is seated in the driver’s seat.

His skin takes on a warm golden glow in the rays of the setting sun, emphasizing the definition of his muscles and the subtle interplay of light and shadow across his body. The man tilts his head downward and slightly to the left, while his face is partially concealed beneath a wide-brimmed black bucket hat with an embroidered logo, giving his appearance a sense of mystery and quiet concentration.

He wears headphones with loose wires hanging around his neck, reinforcing the feeling of privacy and deep immersion in his own thoughts or music. His lean, athletic torso is almost entirely bare, complemented only by a delicate necklace and a bracelet that catches the sunlight. Black shorts fit closely around his thighs, emphasizing his athletic physique and youthful energy.

His right hand grips the leather-textured steering wheel with confidence, while a gold-toned watch glimmers on his wrist, creating a subtle visual accent. In his left hand, he holds a carton of orange juice, with its lettering and packaging details clearly visible, naturally reinforcing the casual, everyday atmosphere of the scene.

Through the car window, softly blurred silhouettes of greenery and a roadside barrier can be seen, rendered with a rich, subdued color palette and warm natural light that fills the frame with a sense of tranquility.

The entire scene carries a quiet dynamic tension and visual harmony, where modern everyday life and the freshness of nature meet within a deeply personal space filled with soft reflections and subtle interior details. The photograph feels like a suspended moment in time, capturing a balance between strength, relaxation, and natural light, where every element—from the texture of skin and fabric to the glass surfaces, leather steering wheel, and dashboard—contributes to the realism and emotional depth of the image.

Photorealistic image, authentic facial features preserved from the reference photo, realistic skin texture and anatomy, warm golden-hour sunlight, cinematic natural lighting, subtle depth of field, highly detailed car interior, realistic materials and reflections, premium image quality, ultra-detailed textures, 8K resolution.`,

  negative: `different man, changed face, altered identity, identity drift, face swap, blended identity, generic male face, changed facial features, distorted face, changed nose, changed lips, changed jawline, unrealistic skin, plastic skin, waxy skin, excessive smoothing, unrealistic muscles, exaggerated muscles, bad anatomy, incorrect body proportions, extra arms, extra legs, duplicate limbs, extra fingers, missing fingers, fused fingers, malformed hands, distorted hands, malformed steering wheel, duplicated steering wheel, distorted car interior, warped dashboard, malformed headphones, duplicated accessories, malformed orange juice carton, impossible pose, distorted body, blurry face, cropped head, CGI, 3D render, cartoon, illustration, painting, low quality, low resolution, oversaturated colors, harsh artificial lighting, flat lighting, unrealistic reflections, watermark, logo, unwanted text, artifacts, excessive noise, excessive motion blur`
},
{
  id: "013",
  title: "Tropical Guava Beauty Portrait",
  image: "prompt-013.PNG",

  positive: `Ultra-photorealistic vertical 4:5 tropical beauty portrait of the exact woman from the identity reference, 22–26 years old. Recreate the scene reference’s close-up composition, three-quarter head tilt, raised hand near chin, half guava, tropical flowers, green top and luminous beauty lighting.

IDENTITY HIGHEST PRIORITY: preserve her exact recognizable face, facial proportions, cheekbones, jawline, nose, lips, eyebrows and natural asymmetry. Never copy or blend with the scene-reference woman.

Her eyes remain deep dark espresso/chocolate brown, with realistic irises, pupils and catchlights. Fresh glamorous makeup: defined lashes, subtle eyeliner, peach-coral blush, luminous natural skin and glossy coral-nude lips.

Long dimensional BLONDE hair, lower-chest to mid-back length, loose glamorous waves, champagne/beige-blonde tones with slightly darker natural roots. Never brunette or excessively long.

Place TWO fresh orchids in her hair on one side: one coral-pink and one yellow-green/chartreuse, with realistic petals and natural attachment.

Skin is consistently warm light golden-beige with peach-golden undertones across face, neck, chest, arms and hand. No face/body color mismatch. Preserve pores, peach fuzz and natural skin texture.

POSE: intimate close-up from head to upper chest. Head gently tilted, direct confident eye contact. One arm raised with hand resting elegantly beneath/beside the chin while holding ONE freshly cut half guava: green outer skin, juicy coral-pink flesh, natural pale seeds. Five anatomically correct fingers, nude/pale-pink almond manicure.

She wears a fitted olive-lime/pistachio-green ruched tropical top with feminine neckline and realistic fabric texture.

Background: softly blurred luxurious tropical-modern interior, neutral gray/ivory tones with subtle dark-green foliage.

Bright soft window/beauty lighting, realistic catchlights and gentle shadows. 70–85mm portrait lens, shallow natural depth of field, sharpest focus on face and dark-brown eyes, detailed blonde strands, orchids, hand and guava.

Luxury tropical editorial photography, realistic skin, natural optical bokeh, professional color grading, subtle grain, 8K photorealistic detail, premium beauty campaign aesthetic.

Photo format: vertical 4:5.`,

  negative: `wrong identity, blended face, generic AI woman, altered features, face swap, blue/green/gray/hazel eyes, brunette/black/red hair, short hair, excessively long hair, wig, yellow/orange blonde, mismatched face/body skin tone, orange skin, plastic/waxy skin, excessive smoothing, wrong/missing/duplicated flowers, roses, missing guava, whole guava, multiple fruit, wrong fruit, malformed guava, extra/missing/fused fingers, malformed hand, hand covering face, bad anatomy, exaggerated chest, wrong pose, extreme head tilt, wrong outfit, bikini, transparent clothing, busy background, additional people, fisheye, distorted face, CGI, anime, illustration, blurry, low resolution, watermark, text, AI artifacts.`
}
];
