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
},
  {
  id: "014",
  title: "Stormy Sky Rebel Editorial",
  image: "prompt-014.PNG",

  positive: `Ultra-photorealistic vertical 4:5 low-angle outdoor fashion photograph of the exact woman from the identity reference, 23–27 years old. Use the composition reference ONLY for pose, camera angle, outfit, expression and stormy-sky setting.

Preserve her exact recognizable identity: face shape, cheekbones, jawline, eyes, eyebrows, nose, lips and natural proportions. Preserve her exact natural eye color, skin tone and hair color. Never blend her with the reference model.

Extreme low-angle perspective, camera near waist/hip level pointing upward. Frame from hips upward. Woman centered in the lower frame while a dramatic dark blue-gray cloudy sky fills about two-thirds of the image.

She raises BOTH arms high, elbows bent outward, making a middle-finger gesture with BOTH hands. Five anatomically correct fingers per hand. Head slightly tilted back, looking toward camera with a playful rebellious tongue-out expression.

NO HAT OR HEADWEAR. Hair loose and naturally windswept, preserving her exact identity-reference hair color.

Outfit: oversized cropped light-heather-gray sweatshirt with long loose sleeves, lifted naturally by her raised arms. Underneath is a fitted PLAIN WHITE sports bra/crop top with absolutely NO TEXT, LOGO OR PRINT, exposing a natural section of midriff. Matching relaxed gray sweatpants.

Natural feminine proportions; no exaggerated chest, hips, waist or abs.

Background almost entirely filled with huge realistic stormy blue-gray clouds. No distracting buildings, crowds or objects.

Soft directional cloudy daylight. Face, hands and body remain clearly exposed and sharply detailed.

Maximum photorealism, 8K detail, realistic pores, hair strands, eyelashes, hands, fingers, tongue, sweatshirt fibers and cloud texture. Authentic spontaneous smartphone/editorial photograph, natural 24–28mm perspective, subtle HDR, no CGI appearance.

Photo format: vertical 4:5.`,

  negative: `different identity, reference-model face, blended face, generic AI woman, wrong eye/hair/skin color, hat, cap, bucket hat, sunglasses, text, logo, lettering on white top, arms lowered, one arm raised, wrong gesture, peace sign, cropped hands, extra fingers, missing fingers, fused fingers, malformed hands, extra arms, missing tongue, distorted tongue, closed mouth, wrong outfit, hoodie, patterned sports bra, exaggerated breasts, tiny waist, oversized hips, distorted anatomy, clear sky, sunset, indoor setting, crowds, fisheye, warped face, giant head, blurry face, blurry hands, low resolution, CGI, 3D render, illustration, anime, watermark, additional people, duplicate woman, AI artifacts.`
},
{
  id: "015",
  title: "Golden Jungle Macaque Editorial",
  image: "prompt-015.png",

  positive: `Ultra-photorealistic vertical 4:5 cinematic tropical lifestyle portrait of the exact young adult woman from the identity reference, 23–27 years old, recreating the scene reference’s joyful jungle composition, pose, monkey interaction, terracotta dress and golden-hour atmosphere.

IDENTITY HIGHEST PRIORITY: preserve her exact recognizable face, facial proportions, cheekbones, jawline, nose, lips, eyebrows and natural smile characteristics. Never copy or blend with the scene-reference woman.

Her eyes remain deep dark espresso/chocolate brown with realistic irises and catchlights. She laughs naturally with an authentic open smile and realistic teeth, looking slightly upward toward the monkey.

Long dimensional BLONDE hair, lower-chest to mid-back length, loose tropical waves, champagne/beige-blonde with subtle honey tones and slightly darker natural roots. Individual strands and flyaways glow in the backlight. Never brunette or excessively long.

Skin remains consistently warm golden-beige with peach-golden undertones across face, neck, chest, arms and hands. Preserve pores, peach fuzz and natural texture. No face/body color mismatch.

POSE: medium portrait from hips/upper thighs upward. She stands naturally, torso slightly toward camera, head turned toward the monkey. One arm relaxed near her hip. Preserve natural feminine proportions and realistic anatomy.

A single realistic adult long-tailed macaque sits securely on one shoulder, anatomically correct scale and gray-brown fur. Its weight subtly compresses the shoulder. Natural hands/feet grip gently for balance without merging with her body. The macaque calmly holds ONE small partially eaten pale-yellow tropical fruit in both hands near its chest. Realistic primate anatomy, fingers, fur and contact shadows.

She wears a simple deep terracotta/burnt-orange sleeveless tropical dress with thin straps, feminine V-neckline and lightweight textured fabric. Natural fit, folds and proportions.

ENVIRONMENT: dense authentic tropical rainforest with palms, vines, moss, layered dark-green foliage and textured tree trunks. Warm humid atmosphere with strong natural depth.

LIGHTING: magical late-afternoon golden sunlight filtering through the canopy, creating warm rim light around her blonde hair and the monkey’s fur, soft dappled highlights, subtle atmospheric haze and natural circular bokeh. Face remains correctly exposed.

Professional 50–70mm portrait lens, shallow natural depth of field, sharpest focus on her recognizable face and dark-brown eyes with excellent detail on the monkey. Rich forest greens, champagne blonde, golden light and terracotta color harmony.

Luxury tropical travel editorial, spontaneous candid vacation moment, realistic skin and fur, natural optical bokeh, subtle film grain, cinematic color grading, 8K photorealistic detail, premium magazine-quality photography.`,

  negative: `wrong identity, blended face, generic AI woman, altered features, face swap, fake smile, malformed teeth, blue/green/gray/hazel eyes, brunette/black/red hair, excessively long hair, wig, yellow/orange blonde, mismatched face/body skin, orange skin, plastic/waxy skin, excessive smoothing, wrong animal, chimpanzee, gorilla, orangutan, baboon, baby monkey, giant/miniature monkey, multiple monkeys, cartoon/toy monkey, malformed primate anatomy, extra limbs, human-like monkey hands, monkey fused with woman, floating monkey, aggressive monkey, biting, scratching, injury, missing fruit, multiple fruit, malformed fruit, extra/missing fingers, malformed human hands, bad anatomy, exaggerated curves, impossible pose, wrong dress, bikini, lingerie, transparent clothing, artificial jungle, zoo cage, city, studio, additional people, fisheye, CGI, anime, illustration, blurry, low resolution, watermark, text, AI artifacts.`
},
  {
  id: "016",
  title: "Ivory Lagoon Resort Editorial",
  image: "prompt-016.png",

  positive: `Ultra-photorealistic vertical 4:5 luxury tropical resort fashion photograph of the exact young adult woman from the identity reference, 23–27 years old, standing on a private beachfront terrace overlooking lush greenery, pale sand and a crystal-clear turquoise lagoon. Recreate the scene reference’s pose, white crochet outfit, wooden railing, tropical setting, lighting and relaxed vacation mood.

IDENTITY HIGHEST PRIORITY: preserve her exact recognizable face, facial proportions, cheekbones, jawline, nose, lips, eyebrows and natural asymmetry. Never copy or blend with the scene-reference woman. Preserve her authentic natural body proportions.

Her eyes remain deep dark chocolate/espresso brown. Expression relaxed and playful: head slightly turned and tilted backward, eyes gently closed/lowered, lips softly pursed.

HAIR: long LIGHT BLONDE, approximately chest-to-mid-back length, dimensional champagne/beige blonde with slightly darker natural roots. Loose, sleek, center-parted hair moving gently in the tropical breeze. Individual strands and flyaways visible. Never brunette or excessively long.

SKIN: preserve her established warm light golden-beige, softly sun-kissed complexion. Face, neck, chest, abdomen, arms and hands must have one perfectly continuous skin tone, with no face/body mismatch or face-swap boundary. Real pores, peach fuzz and natural texture.

POSE: standing against a pale weathered wooden railing, torso mostly toward camera with a subtle waist rotation and relaxed hip shift. Both arms extend outward and slightly backward, hands resting naturally on the railing, elbows softly bent, shoulders relaxed and chest gently lifted toward the sea breeze.

OUTFIT: premium soft-ivory open-knit crochet resort set. Cropped crochet cardigan with deep V-neckline, long loose bell sleeves and a small center knot beneath the bust. A minimal dark navy/cobalt bikini top is subtly visible underneath. Matching ivory crochet wrap/sarong tied with a soft knot at one hip, with a tasteful leg slit. Highly realistic individual crochet loops, fibers, stitching, folds and shadows; elegant, airy and not excessively transparent.

Minimal refined gold/pearl jewelry. Optional tiny white tropical flower discreetly tucked into her blonde hair.

BACKGROUND: dense glossy tropical greenery immediately behind the railing, followed by pale cream-white sand and spectacular shallow turquoise/aqua lagoon, transitioning naturally into deeper blue-green water. Open tropical horizon and soft pale-blue sky with scattered white/light-gray clouds.

Bright natural tropical daylight, softly diffused by thin clouds. Luminous highlights on blonde hair, cheekbones, shoulders and abdomen while retaining skin and white-crochet detail. No harsh flash.

Frame approximately from upper thighs/knees upward. 45–60mm lens, natural proportions, woman occupying 60–70% of frame height. Woman and railing crisp; lagoon slightly softer but recognizable.

Luxury Maldives/private-island fashion campaign, authentic vacation photography, natural anatomy, perfect hands, detailed blonde hair, realistic crochet, wood grain, tropical foliage and water, subtle film grain, refined color grading, HDR, 8K-level photorealistic detail.`,

  negative: `wrong identity, generic AI woman, face swap, altered facial features, blue/green/gray/hazel eyes, brunette/black/red hair, short hair, excessively long hair, wig, face/body skin mismatch, orange tan, plastic/waxy skin, excessive smoothing, exaggerated breasts/hips, tiny waist, stretched torso, bad anatomy, extra arms/hands/fingers, fused/missing fingers, malformed hands, hand fused with railing, wrong pose, arms down/crossed, wrong outfit, dress, pants, bikini only, missing sleeves, malformed crochet, excessive transparency, nudity, cheap lace, giant hair flower, crowded beach, pool, city, indoor/studio setting, fake ocean, neon water, storm, sunset, nighttime, harsh flash, blown-out white fabric, fisheye, stretched arms, warped railing/horizon, cropped head/hands, CGI, 3D render, anime, illustration, blurry, low resolution, watermark, logo, text, AI artifacts.`
},
  {
  id: "017",
  title: "Turquoise Mediterranean Coast Editorial",
  image: "prompt-017.png",
  imagePosition: "top",

  positive: `Ultra-photorealistic vertical 9:16 luxury Mediterranean coastal fashion portrait of the exact young adult woman from the identity reference, 23–27 years old. Recreate the scene reference’s standing pose, upward-turned head, turquoise crochet resortwear, woven bucket hat, jewelry, rocky coastline, vivid blue sea and bright vacation atmosphere.

IDENTITY HIGHEST PRIORITY: preserve her exact recognizable face, facial proportions, cheekbones, jawline, nose, lips, eyebrows and natural asymmetry. Never copy or blend with the scene-reference woman. Preserve her authentic natural body proportions.

Her eyes remain deep dark espresso/chocolate brown. Her hair remains long LIGHT BLONDE, chest-to-mid-back length, dimensional champagne/beige-blonde with slightly darker natural roots, worn loose and softly moved by the sea breeze. Never brunette or excessively long.

Skin must maintain her authentic complexion and remain perfectly consistent across face, neck, chest, abdomen, arms, hands and legs. Sunlight may warm the skin naturally but must not change its base tone. Preserve pores, peach fuzz and realistic body texture.

She wears a cream woven bucket hat with subtle beige stitched stripes, realistic fibers and natural shadow across the forehead.

POSE: standing mostly toward camera with gentle torso rotation, relaxed shoulders and natural weight distribution. Head turned slightly sideways and tilted upward toward the sunlight, serene confident expression. Arms rest naturally alongside the body.

OUTFIT: handcrafted turquoise/teal crochet halter top with cream crochet edging and tasteful tiny shell/starfish-inspired details. Matching turquoise crochet mini wrap/skirt over resortwear bottoms, side ties and delicate hanging shell details. Realistic threads, knots, weave and fabric tension.

Accessories: layered delicate shell-and-gold necklaces, minimalist waist chain, polished gold cuff, rings and subtle bracelets.

ENVIRONMENT: spectacular Mediterranean rocky coastline with rugged pale limestone cliffs, coastal greenery and intensely turquoise/deep-blue seawater, subtle foam and atmospheric depth.

Bright natural Mediterranean sunlight creates defined highlights on blonde hair, shoulders and jewelry with realistic shadows beneath the hat and chin. Preserve full highlight and shadow detail.

Frame from hat to upper/mid-thigh, woman centered with enough coastline visible. 50–70mm lens, natural perspective, subject razor-sharp with slightly softer but recognizable sea and cliffs.

Luxury Mediterranean resort campaign, sophisticated vacation editorial, realistic skin and anatomy, detailed blonde strands, woven hat fibers, crochet threads, jewelry and rock/water textures, natural depth, refined color grading, 8K photorealistic quality.`,

  negative: `wrong identity, blended face, generic AI model, altered facial features, face swap, brunette/black/red hair, short hair, excessively long hair, wig, blue/green/gray/hazel eyes, changed body proportions, exaggerated breasts/hips, tiny waist, elongated legs, face/body skin mismatch, excessive tan, orange skin, plastic/waxy skin, excessive smoothing, fake abs, malformed hands, extra/missing/fused fingers, bad anatomy, wrong hat, baseball cap, cowboy hat, floating hat, wrong outfit, swimsuit replacing crochet, dress, black clothing, malformed crochet, giant shells/starfish, floating jewelry, wrong pose, extreme hip thrust, artificial cliffs, fake ocean, pool, city, studio, nighttime, sunset, harsh flash, blown highlights, fisheye, distorted body, cropped hat/head, CGI, 3D render, anime, illustration, blurry, low resolution, watermark, logo, text, AI artifacts.`
}
];
