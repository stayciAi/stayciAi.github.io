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
},
  {
  id: "018",
  title: "Upside-Down Subway Fashion",
  image: "prompt-018.png",

  positive: `Ultra-realistic candid fashion photograph of a glamorous adult woman, approximately 24–28 years old, posing dramatically across the seats inside a modern subway / metro train. Recreate the supplied reference as closely as possible, preserving the unusual upside-down pose, body placement, camera angle, perspective distortion, train interior, blue seats, outfit styling, lighting and spontaneous editorial mood, while keeping long light-blonde hair and deep dark espresso-brown eyes.

The woman has a slim feminine figure with natural realistic proportions, long proportional legs and anatomically correct posture. Her skin is light-to-medium warm beige with authentic pores, fine skin texture, subtle natural imperfections and realistic highlights from the bright train lighting.

Her face has refined oval-to-heart-shaped feminine proportions, softly defined cheekbones, an elegant jawline, straight balanced nose and naturally full nude-pink lips. Her makeup is fresh and understated: softly defined brows, long natural lashes, subtle neutral eyeshadow, delicate blush and lightly glossy nude-pink lips.

EYES MUST ALWAYS BE DEEP DARK ESPRESSO BROWN: rich dark chocolate-brown irises with realistic pupils and natural reflections, never blue, gray, green, hazel or amber. Her eyes are closed in this particular pose exactly as shown in the reference, but her underlying eye color remains dark espresso brown.

HAIR MUST BE VERY LONG AND LIGHT BLONDE: luxurious light champagne-blonde hair extending well below the chest/waist when standing, with silky realistic texture and subtle dimensional blonde highlights. Because she is hanging upside down from the seat, her long hair falls naturally toward the train floor under gravity, spreading dramatically across the dark floor in the foreground. Individual strands and loose sections fan outward naturally, creating the same visual effect as the reference but with distinctly light-blonde coloring. No brunette hair and no visible dark roots.

She wears the same casual Y2K-inspired outfit as the reference: a soft dusty-pink sleeveless/cropped top with distressed or raw-edge detailing, layered over a small white top visible underneath, paired with short black bottoms. White wired earphones run naturally from her ears across the pink top. She wears white crew socks with narrow black stripes and chunky white sneakers. Preserve realistic cotton fibers, seams, wrinkles, folds and natural fabric tension.

POSE — RECREATE THE REFERENCE VERY CLOSELY: she lies unconventionally across two blue metro seats with her torso upside down. Her upper back and hips remain supported by the seats while her head hangs completely backward over the front edge toward the floor. Her extremely long blonde hair reaches and spreads across the floor beneath her head.

One arm extends diagonally outward and downward toward the camera along the floor, with the relaxed hand lightly holding several strands of her hair. Her other arm remains closer to her body/seat. Her legs extend upward and backward along the seat area, with one leg raised almost vertically toward the ceiling and the other bent naturally beside it. Preserve believable balance, gravity, joint articulation and natural anatomy.

Her head is inverted, eyes gently closed and lips relaxed, giving the photograph a carefree, spontaneous editorial feeling rather than a formal posed portrait.

ENVIRONMENT — MATCH THE REFERENCE: interior of a clean modern subway/metro carriage with white and pale-gray wall panels, dark gray flooring, vivid blue upholstered seats with white molded bases, stainless-steel vertical and curved grab poles, a blue overhead rail and hanging triangular yellow/orange hand straps. Dark train windows and small black information/display screens line the wall behind her. Long rectangular fluorescent/LED ceiling panels illuminate the carriage.

The carriage appears mostly empty, with additional rows of blue seats and metal poles receding into the distant left background. Preserve the strong architectural lines and depth of the original photograph.

LIGHTING: bright cool-white overhead metro lighting mixed with a subtle direct-camera flash / high-exposure photographic effect. Her face and skin receive stronger illumination than the distant carriage while shadows remain visible beneath the seats and across the floor. Preserve slight highlight bloom, realistic reflections on metal poles and the somewhat raw point-and-shoot fashion-photography aesthetic of the reference.

CAMERA & COMPOSITION: vertical 2:3 photograph taken from an extremely low position close to floor level, approximately 20–28 mm full-frame equivalent wide-angle lens. Camera points slightly upward and diagonally along the subway carriage. Her upside-down head and long blonde hair dominate the lower foreground, while her torso occupies the center and her raised legs lead upward toward the top of the frame. Strong wide-angle perspective and deep architectural lines emphasize the unusual pose.

Authentic high-resolution candid fashion photography, realistic anatomy, natural gravity, individual blonde hairs, accurate skin microtexture, realistic fabric fibers, subtle photographic grain, slight point-and-shoot flash character and natural imperfections.

Overall aesthetic: experimental Y2K subway fashion editorial, upside-down pose across blue metro seats, extremely long light-blonde hair cascading onto the floor, dusty-pink top, white sneakers, wired earphones, dramatic low-angle perspective and spontaneous analog-inspired urban photography.`,

  negative: `short hair, medium-length hair, brunette hair, brown hair, black hair, red hair, auburn hair, dark roots, black roots, brown roots, blue eyes, gray eyes, green eyes, hazel eyes, amber eyes, hair floating upward against gravity, hair not touching floor, ponytail, bun, braids, different pose, sitting normally, standing, walking, upright portrait, head above seat, both feet on floor, both arms raised, looking directly at camera, smiling broadly, different outfit, dress, skirt, jeans, formal clothing, high heels, boots, barefoot, different colored seats, bus interior, airplane interior, car interior, train station platform, outdoor environment, crowded carriage, excessive passengers, warm sunset lighting, nightclub lighting, neon environment, extreme HDR, oversaturated colors, plastic skin, waxy skin, poreless skin, unrealistic body proportions, malformed anatomy, broken neck, impossible spine, extra arms, extra legs, duplicated limbs, extra fingers, fused fingers, malformed hands, malformed feet, duplicated shoes, floating body, incorrect gravity, CGI, 3D render, illustration, anime, doll-like face, excessive blur, watermark, random text, logo.`
},
  {
  id: "019",
  title: "Dark Boxing Gym",
  image: "prompt-019.png",

  positive: `Ultra-photorealistic vertical masculine boxing/fitness editorial photograph of an exceptionally muscular adult man, 28–30 years old, inside a dark professional boxing gym. Recreate the reference’s shirtless athletic physique, black boxing gloves, loose light-gray/off-white sweatpants, white sneakers, boxing ring/heavy bag, industrial atmosphere, overhead strip lights, sweat and dramatic sports lighting.

The man is unmistakably adult, with a powerful but anatomically realistic physique: very broad shoulders, rounded deltoids, thick traps, large defined arms, muscular forearms, broad sculpted chest, narrow strong waist and sharply visible abs. No cartoonish or artificially inflated muscles.

Strong masculine face with broad forehead, pronounced brow, defined cheekbones, straight substantial nose, angular jaw and chin. Focused, intense, confident expression, closed lips and serious gaze.

EYES: always deep dark espresso/chocolate brown, with realistic dark irises, pupils and subtle catchlights. Never blue, green, gray, hazel or light.

HAIR: short dense deep espresso-brown/near-black hair, approximately 2–4 cm on top with closely tapered sides. Masculine athletic haircut, natural individual strands.

FACIAL HAIR — CRITICAL: neat short 2–5 mm dark beard across sideburns, lower cheeks, jaw and chin, but ABSOLUTELY NO MUSTACHE. Upper lip completely clean-shaven: no hair, stubble, shadow or beard connection beneath the nose.

Skin is light-to-medium warm beige with golden/olive undertones. Real pores, subtle body hair, veins, pigmentation and natural perspiration. Sweat creates controlled highlights across shoulders, chest, arms and abs without oily/plastic skin.

Completely shirtless. Large professional black leather boxing gloves with realistic padding, stitching, creases and slightly worn matte/semi-gloss leather. Minimal white wrist detailing, no readable logos.

Loose light-gray/off-white sweatpants with gathered waistband and realistic soft folds. In full-body framing, clean chunky white athletic sneakers.

PRIMARY POSE

Frame approximately mid-thigh/waist upward beside or inside a boxing ring. Torso slightly angled while his head turns toward the camera. Both gloves raised in a compact fighting guard near chest/face, one slightly closer to the lens. Natural bent elbows, engaged shoulders and contracted abdomen.

Horizontal boxing-ring ropes behind him. Dark industrial gym with indistinct equipment and boxing imagery fading into shadow.

OPTIONAL FULL-BODY VARIATION

Position him beside ONE large red-and-black cylindrical heavy punching bag suspended naturally from chains. He stands relaxed after training, one gloved arm near the bag and the other near his hip, ankles casually crossed. White sneakers fully visible.

ENVIRONMENT & LIGHTING

Authentic used professional boxing gym: dark rubber floor, ring ropes, heavy bags, steel structures, dark ceiling and subtle brick/industrial surfaces. Long narrow white LED/fluorescent strip lights create strong geometric lines overhead.

Dramatic high-contrast directional sports lighting with controlled frontal/side key light. Bright highlights sculpt forehead, cheekbones, shoulders, chest, biceps, forearms and abs while deep shadows retain skin detail. Subtle rim separation allowed.

Restrained palette: deep blacks, charcoal, muted brick red, punching-bag red, warm natural skin and off-white clothing. No orange bodybuilding tan or neon grading.

Use 50–85mm full-frame lens for close portrait or 35–50mm for full body, natural perspective, subject tack-sharp with realistic gym depth. Authentic pores, beard hairs, sweat droplets, body hair, glove leather, fabric fibers and gym wear, subtle sensor grain, natural highlight roll-off, 8K-level professional sports-editorial detail.`,

  negative: `underage, teenager, elderly, feminine, androgynous, skinny, obese, superhero anatomy, synthol, balloon muscles, cartoon muscles, malformed abs, distorted torso, extra/missing limbs, malformed hands, extra/missing/fused fingers, blue/green/gray/hazel/amber/light eyes, blonde/light-brown/red/gray/white hair, long hair, ponytail, man bun, bald, mustache, upper-lip hair, upper-lip stubble, mustache shadow, beard connected beneath nose, no beard, huge beard, shirt, tank top, hoodie, jeans, tight leggings, bare feet in full-body shot, tiny/red/deformed gloves, extra gloves, gloves fused with hands, duplicated/floating punching bag, opponent, active violence, blood, injuries, weapon, futuristic gym, living room, outdoor setting, neon/cyberpunk lighting, orange fake tan, excessive oil, plastic/waxy skin, fake sweat, fisheye, giant hands, tiny head, warped boxing ropes, blurry face/eyes, excessive HDR, crushed blacks, blown highlights, readable logos/text, watermark, CGI, 3D render, anime, illustration, synthetic AI fitness render.`
},
  {
  id: "020",
  title: "Sculpted Shadow Physique",
  image: "prompt-020.png",

  positive: `Ultra-photorealistic vertical dramatic masculine fitness editorial of an extremely muscular adult man, 30–36 years old, kneeling barefoot in a minimalist dark studio. Recreate the reference’s wide-knee kneeling pose, hands on thighs, side-turned head, low-rise dark denim and dramatic geometric sunlight/shadows.

Extremely muscular but anatomically believable classic bodybuilding physique: very broad shoulders, massive rounded deltoids, thick traps and neck, powerful chest, large biceps/triceps, muscular forearms, compact waist and defined natural abs. Realistic muscle transitions, asymmetry and compression; never inflated or superhero-like.

Strong masculine angular face, pronounced brow, cheekbones, substantial straight nose, powerful jaw and chin. Serious, controlled, introspective expression. Head turned approximately 50–70° toward the left, gaze following sideways rather than toward camera.

EYES: always deep dark espresso/chocolate brown, realistic dark irises and subtle catchlights. Never blue, green, gray, hazel or light.

HAIR: short dense deep espresso-brown/near-black hair, tapered sides, naturally textured 2–4 cm top. Never blonde/light/gray/red or long.

FACIAL HAIR — CRITICAL: neat 2–5 mm dark beard across sideburns, lower cheeks, jaw and chin, but ABSOLUTELY NO MUSTACHE. Upper lip completely clean-shaven: no hair, stubble, shadow or connection beneath the nose.

Skin is light-to-medium warm beige with subtle olive-bronze undertones. Real pores, pigmentation, body hair, veins and restrained perspiration. Slight natural sheen on shoulders, chest and arms without oily/plastic skin.

Completely shirtless. Dark deep-indigo/blue-green denim jeans worn low on the waist, with a narrow dark underwear waistband subtly visible. Authentic denim weave, seams, pockets, stitching and realistic compression folds. No readable branding.

POSE: kneeling directly on the floor with both knees spread widely apart, lower legs naturally folded behind. Pelvis slightly elevated above heels. Torso upright and powerful, shoulders slightly pulled back. Both hands rest firmly on the upper thighs, fingers naturally separated and pointing downward. Bare feet, realistic gravity and contact shadows.

Vertical framing from approximately knees to head, with generous negative wall space. Camera around abdomen/lower-chest height, subtle low perspective, 50–70mm full-frame lens, minimal distortion.

Minimal studio with smooth muted charcoal-teal/dark desaturated green-gray wall and matching matte floor, subtle plaster texture, absolutely no furniture or gym equipment.

LIGHTING: hard directional natural sunlight entering through an unseen architectural opening, creating dramatic rectangular and diagonal shafts of light and shadow across the wall, floor and body. One bright shaft crosses portions of his face, neck, chest, shoulder and arm. Strong chiaroscuro with deep shadows while preserving anatomical detail. Sculptural highlights across clavicles, pectorals, shoulders and arms.

Restrained palette of charcoal teal, desaturated green-gray, indigo denim, warm bronze-beige skin and near-black hair. Rich blacks, controlled highlights, subtle film grain and moderate depth of field.

Authentic fine-art male physique photography, cinematic bodybuilding editorial, realistic skin pores, beard hairs, body hair, perspiration, vascularity, denim fibers, hands and feet, natural optical imperfections, professional full-frame photography, 8K-level editorial detail, completely photographic, not CGI.`,

  negative: `underage, teenager, elderly, feminine, androgynous, skinny, obese, untrained physique, narrow shoulders, cartoon muscles, synthol, balloon muscles, superhero anatomy, impossible shoulders, malformed abs, tiny waist, distorted torso, extra/missing limbs, malformed hands/feet, extra/missing/fused fingers or toes, blue/green/gray/hazel/amber/light eyes, blonde/light-brown/red/gray/white hair, long hair, ponytail, man bun, bald, mustache, upper-lip hair, upper-lip stubble, mustache shadow, beard connected beneath nose, no beard, huge beard, shirt, tank top, jacket, sweatpants, shorts, shoes, socks, standing, chair, lying down, arms raised, looking at camera, smiling/laughing, aggressive expression, gym equipment, furniture, outdoor setting, neon lighting, ring light, flat lighting, missing geometric shadows, crushed-black body, blown highlights, orange fake tan, excessive oil, plastic/waxy skin, poreless skin, distorted denim, readable logos/text, fisheye, wide-angle distortion, tiny head, giant hands, blurry face, low resolution, watermark, CGI, 3D render, illustration, anime, synthetic AI fitness render.`
},
  {
  id: "021",
  title: "Industrial Bat Fitness",
  image: "prompt-021.png",

  positive: `Ultra-photorealistic vertical masculine fitness editorial portrait of an exceptionally muscular adult man, 25–30 years old, standing shirtless against a rough matte charcoal-black brick wall in a dark industrial training space. Recreate the reference aesthetic: powerful defined physique, backward charcoal cap, dark sweatpants, metallic baseball bat, dramatic directional lighting and stripped-down masculine fitness-campaign mood.

He has a realistic aesthetic V-shaped physique: broad shoulders, rounded deltoids, developed biceps/triceps, vascular forearms, sculpted chest, narrow waist, defined obliques and sharp six-pack abs. Muscular and heavily trained but anatomically realistic, never cartoonishly oversized.

Masculine angular face, strong brow, prominent cheekbones, straight nose, defined jaw and chin. Calm, serious, self-assured expression with direct eye contact.

EYES: always deep dark espresso/chocolate brown, realistic dark irises, pupils and subtle catchlights. Never blue, green, gray, hazel or light.

HAIR: short, dense deep espresso-brown/near-black hair, approximately 2–4 cm on top with shorter sides, partially visible beneath a backward dark charcoal-gray baseball cap. Never blonde or light-haired.

FACIAL HAIR — CRITICAL: neat short dark beard, approximately 2–5 mm, covering sideburns, lower cheeks, jaw and chin, but ABSOLUTELY NO MUSTACHE. The entire upper lip is completely clean-shaven: no hair, stubble, shadow or beard connection beneath the nose.

Warm medium golden-tan/bronze-beige skin with realistic pores, body hair, subtle imperfections, veins and restrained post-workout perspiration. Natural sheen across forehead, shoulders, chest, abs and arms without excessive oil.

Completely shirtless. Dark charcoal-gray athletic sweatpants worn low on the hips, exposing the full abdomen. Realistic cotton texture and folds. Thin white drawstring tied loosely at the center.

He holds ONE metallic aluminum baseball bat with both hands diagonally/horizontally across the lower torso. Left arm extends slightly outward/downward gripping the thicker barrel; right hand grips the handle near his right hip. Five anatomically correct fingers on each hand naturally wrapping around the bat. Realistic silver metal reflections; no readable branding.

Standing almost front-facing with subtle shoulder asymmetry and slightly angled hips. Relaxed athletic posture, engaged abdomen without exaggerated bodybuilding flexing.

Frame vertically from approximately mid-thigh upward. Camera near lower-chest height, 70–100mm full-frame portrait lens, minimal distortion.

Background: rough charcoal-black painted brick/concrete-block wall, visible masonry texture, seams and imperfections, no distracting gym equipment.

Dramatic directional key light from above/front camera-left, emphasizing forehead, cheekbones, shoulders, chest, arms and abs. Deep controlled shadows on the opposite side with enough fill to preserve facial and eye detail. Faint natural body shadow on wall.

Restrained masculine palette: warm bronze skin, near-black hair, charcoal clothing, silver bat and black masonry. Moderate depth of field; face, eyes, torso, hands and bat sharply detailed.

Authentic professional fitness photography, realistic anatomy, pores, perspiration, body hair, muscle striations, fabric fibers and metal reflections, subtle sensor grain, rich blacks, natural highlight roll-off, 8K-level editorial detail, late-2000s/early-2010s commercial fitness campaign aesthetic, completely photographic, not CGI.`,

  negative: `underage, teenager, elderly, feminine, androgynous, skinny, obese, mass-monster physique, synthol, balloon muscles, cartoon muscles, impossible anatomy, tiny waist, malformed abs, extra limbs, malformed hands, extra/missing/fused fingers, blue/green/gray/hazel/amber/light eyes, blonde/light-brown/red/gray/white hair, long hair, ponytail, man bun, mustache, upper-lip hair, upper-lip stubble, mustache shadow, beard connected beneath nose, no beard, huge beard, shirt, tank top, jacket, shorts, jeans, forward cap, helmet, gym equipment, stadium, multiple bats, wooden bat, bent/floating bat, bat fused with hands/body, violent swinging pose, blood, injury, aggressive grimace, excessive body oil, orange fake tan, plastic/waxy skin, painted muscles, neon lighting, ring light, flat lighting, fisheye, distorted proportions, tiny head, giant hands, blurry face, low resolution, readable logos, watermark, text, CGI, 3D render, illustration, anime, synthetic AI appearance.`
},
  {
  id: "022",
  title: "Black Horse Monochrome",
  image: "prompt-022.png",

  positive: `Ultra-photorealistic square 1:1 black-and-white luxury equestrian fashion portrait of a handsome adult man, 27–32 years old, standing shirtless and closely embracing a magnificent large black horse. Recreate the reference composition: horse broadside filling most of the frame, head extending left, man pressed against its shoulder/neck near center-right, one hand flat on the horse’s shoulder and the opposite arm reaching over its back/withers.

The man has a naturally athletic masculine physique: broad shoulders, defined arms and chest, strong forearms, narrow waist, realistic proportions and subtle natural chest/body hair. No exaggerated bodybuilding anatomy.

Strong masculine face with defined brow, cheekbones, straight nose, angular jaw and projected chin. Serious, calm, introspective expression, lips closed. Head turned toward camera-right in a strong three-quarter/side profile, gaze slightly downward into the distance.

EYES: always deep dark espresso/chocolate brown, appearing naturally very dark in monochrome with subtle catchlights.

HAIR: dense deep espresso-brown/near-black short hair, 3–5 cm textured top with shorter tapered sides, slightly tousled and swept naturally backward.

FACIAL HAIR — CRITICAL: short rugged dark 2–5 mm beard across sideburns, lower cheeks, jawline and chin, but ABSOLUTELY NO MUSTACHE. Upper lip completely clean-shaven: no hair, stubble, shadow or beard connection beneath the nose.

Realistic light-to-medium warm beige/olive skin translated naturally into monochrome. Preserve pores, follicles, body hair, tiny imperfections, veins and authentic skin texture.

POSE & HORSE

His bare torso gently presses against the horse’s shoulder/lower neck. One open palm rests naturally against the horse’s shoulder, five anatomically correct fingers following its curvature. His opposite arm reaches over the horse’s neck/back, hand resting gently across the withers. Interaction feels calm, trusting and intimate, never aggressive.

Large anatomically accurate black warmblood/thoroughbred-type horse, muscular and elegant. Horse head faces left in calm profile, ears forward, dark relaxed eye, realistic muzzle, nostrils and whiskers. Deep glossy black coat with detailed charcoal/silver highlights revealing neck, shoulder and body musculature. Natural dark mane with individual hairs.

Minimal dark leather bridle with anatomically correct straps, subtle buckles, rings and metallic bit. No saddle.

STUDIO & LIGHTING

Minimal seamless pale gray/off-white studio background, no scenery or props.

Classic large soft directional key light from upper-left/front-left. Sculptural highlights across the horse’s face and coat and the man's forehead, cheekbone, shoulder, arms and hands. Deep charcoal shadows retain texture and detail.

Entire image in sophisticated neutral black and white: velvety blacks, charcoal midtones, luminous silver-gray highlights and soft off-white background. Horse remains darker than the man for clear tonal separation. Subtle analog monochrome film grain and gentle highlight roll-off.

COMPOSITION & QUALITY

Square 1:1 framing. Horse fills almost the entire composition: head in left third, neck crossing behind the man, torso dominating right side. Man occupies central third, cropped around lower waist/hips. His bright bare shoulder contrasts elegantly against the black horse.

Use 85–105mm full-frame portrait lens, natural compression, no distortion. Man’s face and horse’s head/visible eye sharply resolved with slightly softer rear body.

Extreme photographic detail: individual beard and hair strands, pores, body hair, hand tendons, horse coat hairs, mane, whiskers, leather grain, metal hardware and subtle film grain.

Timeless luxury fragrance campaign × fine-art equestrian editorial, restrained masculine elegance, authentic monochrome film photography, high-resolution realism.`,

  negative: `underage, teenager, elderly, feminine, androgynous, huge bodybuilder, steroid physique, exaggerated muscles, distorted anatomy, extra/missing limbs, malformed hands, extra/missing/fused fingers, man fused with horse, hands fused into horse, blue/green/gray/hazel/amber/light eyes, blonde/light/red/gray/white hair, long hair, ponytail, man bun, bald, mustache, upper-lip hair, upper-lip stubble, mustache shadow, beard connected beneath nose, no beard, huge/long beard, excessive body hair, completely hairless body, shirt, jacket, suit, hat, sunglasses, smiling, laughing, looking directly at camera, white/brown/gray/spotted horse, pony, foal, multiple horses, fantasy horse, unicorn, malformed horse, extra horse limbs/head, aggressive/rearing horse, saddle, decorative tack, floating bridle, plastic horse coat, outdoor setting, stable, field, forest, beach, fence, black background, colored/neon lighting, color photo, sepia, crushed horse detail, blown background, excessive HDR, plastic/waxy skin, excessive smoothing, fisheye, warped proportions, motion blur, blurry face/horse eye, low resolution, text, watermark, logo, CGI, 3D render, illustration, anime, painting, synthetic AI render.`
},
  {
  id: "023",
  title: "Melancholic Coastal Portrait",
  image: "prompt-023.png",

  positive: `Ultra-photorealistic vertical 9:16 cinematic analog coastal portrait of an adult man, 24–28 years old, lying curled on his side among rough wet shoreline stones beside a quiet gray-green sea. Recreate the reference’s intimate melancholic composition: body diagonal across the lower-right frame, head resting naturally on one bent forearm, opposite tattooed forearm crossing close to the camera, oversized washed-black clothing, rocky shoreline and muted seawater behind him.

Naturally masculine lean-athletic physique, realistic proportions and anatomy. Quiet, tired, introspective expression; lips relaxed, gaze subdued toward the camera. Natural cheek compression where his face rests against his arm.

EYES: always deep dark espresso/chocolate brown, nearly black-brown around the limbal ring, realistic pupils and tiny overcast-sky catchlights.

HAIR: short deep espresso-brown/near-black hair, 2–4 cm textured top with shorter tapered sides, naturally tousled and slightly flattened by humidity and his lying position.

FACIAL HAIR — CRITICAL: short dark 2–5 mm beard across sideburns, lower cheeks, jaw and chin, but ABSOLUTELY NO MUSTACHE. Upper lip completely clean-shaven: no hair, stubble, shadow or beard connection beneath the nose.

Light-to-medium warm beige skin with subtle neutral-olive undertones. Preserve pores, follicles, under-eye texture, tiny imperfections and realistic masculine skin—no beauty filtering.

POSE & TATTOOS

He lies very low in an almost fetal-like curled posture. One forearm acts as a pillow beneath his head. The opposite arm crosses toward the lens, making the tattooed forearm, wrist and hand prominent foreground elements. Relaxed hand with anatomically correct five fingers, realistic knuckles, tendons and nails. Simple silver band ring on one finger.

Multiple authentic-looking black-and-gray tattoos cover portions of the hand, wrist and forearm: aged overlapping illustrative motifs, symbols, subtle lettering fragments and shading. Tattoos follow skin curvature, remain embedded beneath natural skin texture and never resemble digital stickers or readable AI gibberish.

CLOTHING

Oversized washed charcoal-black long-sleeved sweatshirt/top and very dark trousers. Heavy relaxed cotton with visible fibers, seams, faded charcoal highlights and broad natural folds created by the curled posture.

ENVIRONMENT

Dense irregular rocky shoreline with varied wet and dry stones in charcoal, gray, muted brown, olive, rust and mossy tones. No repeated rock patterns.

Behind him, subdued gray-green/slate-blue seawater fills much of the upper frame. Small waves move between shoreline rocks with delicate realistic pale foam and irregular ripples. No tropical turquoise water or dramatic surf.

Soft overcast coastal daylight, diffused across his face, hand, clothing and wet rocks. Black clothing retains shadow detail.

CAMERA & ANALOG STYLE

Camera extremely close at head/arm level and slightly above him. His face sits lower-left/center, black-clothed torso fills much of the right side, and tattooed forearm runs diagonally through the foreground. Foreground hand appears naturally somewhat larger than his face.

Use 28–35mm full-frame equivalent lens, documentary perspective with mild foreground enlargement but no fisheye distortion. Focus on his visible eye, face and tattooed arm; distant rocks and water gradually soften.

Authentic 35mm film / early-2000s editorial aesthetic: moderate-low contrast, gently lifted blacks, warm faded beige skin, deep charcoal clothing, earthy rocks, dusty gray-green sea, fine-to-medium film grain, subtle scanning texture, mild highlight bloom, slight chromatic irregularities and natural optical softness.

Mood: quiet, vulnerable, masculine, introspective and slightly melancholic, like an unplanned analog photograph beside cold coastal water. Ultra-realistic photographic texture, natural imperfections, authentic anatomy, cinematic documentary intimacy.`,

  negative: `underage, teenager, elderly, feminine, androgynous, huge bodybuilder, exaggerated muscles, distorted anatomy, broken pose, extra/missing limbs, malformed hands, extra/missing/fused fingers, impossible thumb, extreme giant hand, distorted face, plastic/waxy skin, beauty filter, blue/green/gray/hazel/amber/light eyes, blonde/light/red/gray/white hair, long hair, ponytail, man bun, bald, mustache, upper-lip hair, upper-lip stubble, mustache shadow, beard connected beneath nose, no beard, huge beard, shirtless, white/colorful clothing, hat, sunglasses, excessive jewelry, smiling, laughing, crying, screaming, standing, sitting, swimming, sandy/tropical beach, palm trees, resort, yacht, bright turquoise water, huge waves, storm, hard sunlight, sunset, studio lighting, neon light, missing tattoos, duplicated/floating tattoos, readable tattoo gibberish, digital-sticker tattoos, uniform/repeated rocks, CGI water, excessive HDR, oversaturation, orange skin, extreme bokeh, portrait-mode halo, fisheye, warped shoreline, blurry face/eyes, excessive sharpening, low resolution, text, watermark, logo, CGI, 3D render, illustration, anime, painting, synthetic AI render.`
},
  {
  id: "024",
  title: "Cozy Noodles at Home",
  image: "prompt-024.png",

  positive: `Create an ultra-realistic, intimate lifestyle photograph of a young adult couple relaxing together at home on a large vintage cognac-brown leather sofa, closely inspired by the composition, cozy mood, body positioning, warm lighting, and candid everyday atmosphere of the reference image.

The couple is sitting very close together on the sofa, comfortably curled up in relaxed, natural positions. Their bodies are slightly turned inward toward each other, creating a subtle feeling of closeness and familiarity. Their legs are casually bent and tucked onto the sofa, with realistic overlapping folds of clothing and completely natural body mechanics. Avoid stiff, symmetrical, posed positioning — the scene should look like a genuine private moment captured spontaneously.

Both are eating instant noodles directly from small white takeaway containers. Each person holds their own container in one hand and a simple fork in the other. Capture them in the middle of eating, with a few strands of noodles naturally suspended between the forks and their mouths. Their attention is focused on the food rather than the camera. Neither person is posing or looking into the lens.

The woman sits on the left side of the frame. She wears an oversized charcoal-gray zip-up hoodie with a relaxed, slightly slouchy fit and loose light-gray sweatpants. Her clothing should look soft, comfortable and genuinely lived-in, with realistic fabric folds around her bent legs and waist. Her hair falls naturally around her face. Her expression is calm and completely unposed as she eats.

The man sits beside her on the right. He wears a soft light-gray oversized zip hoodie over a simple white T-shirt and loose light-gray sweatpants. His outfit has a cozy, slightly oversized homewear silhouette. His posture is equally relaxed, with one leg bent across the sofa while he casually eats from his container.

Maintain realistic differences in their height and build. Both people must have anatomically correct, believable human proportions: realistic head-to-body ratios, natural shoulder widths, arm and leg lengths, hand sizes, joint placement and torso proportions. Their seated positions must remain physically plausible, with no distorted limbs, shortened legs, oversized heads, duplicated fingers or unnatural body geometry.

The setting is simple and intimate: a warm brown leather sofa against a subtly textured warm off-white plaster wall. Keep the background minimal and slightly imperfect rather than luxurious or overly styled. The worn leather texture, small creases in the cushions and soft fabric folds should add authenticity and warmth.

LIGHTING: warm late-afternoon or early-evening ambient light entering softly from one side of the room, creating a beautiful golden glow across the leather sofa and gentle highlights along their faces and clothing. Soft directional shadows, warm amber undertones, subtle falloff toward the opposite side of the frame, low contrast and slightly moody cinematic light. No harsh studio lighting.

CAMERA & COMPOSITION: vertical 3:4 composition, medium-wide lifestyle framing, camera positioned approximately at seated eye/chest level in front of the couple, both people clearly visible from head through their bent legs. Slightly imperfect candid framing, as though photographed quietly by a friend from across the room. Natural perspective without wide-angle distortion.

VISUAL STYLE: authentic 35mm film photography, intimate 1990s/early-2000s snapshot feeling, warm analog color palette, subtle visible film grain, slightly muted colors, gentle softness, realistic skin texture, delicate highlight roll-off, soft shadow detail, mild photographic imperfections and organic tonal variation. Avoid excessive sharpness, HDR, glossy commercial retouching or artificial AI-perfect skin.

The final image should feel affectionate without being overtly romantic — two people completely comfortable around each other, sharing takeout food during a quiet evening at home. Cozy, youthful, spontaneous, imperfect and emotionally warm, like an authentic memory captured on film.

Ultra-realistic photography, photorealistic skin and fabric textures, realistic hands and fingers, anatomically correct bodies, natural facial expressions, believable human proportions, cinematic warm ambient lighting, analog film grain, candid lifestyle photography, shallow-to-moderate depth of field, high detail, natural imperfections.`,

  negative: `distorted anatomy, unrealistic body proportions, oversized heads, tiny heads, shortened legs, elongated limbs, extra arms, extra legs, duplicated limbs, malformed hands, extra fingers, missing fingers, fused fingers, distorted feet, impossible seated pose, floating limbs, body intersections, stiff symmetrical pose, both looking at camera, exaggerated expressions, duplicated food containers, missing food containers, malformed forks, duplicated forks, floating noodles, unrealistic noodles, food fused with hands, clothing fused with body, wrong clothing, formal clothing, glamorous evening wear, outdoor setting, restaurant, luxury staged interior, modern glossy showroom, harsh studio lighting, flash photography, neon lighting, excessive HDR, oversaturated colors, plastic skin, waxy skin, poreless skin, excessive beauty retouching, artificial sharpness, fisheye distortion, extreme wide angle, warped sofa, repeated textures, cluttered background, CGI, 3D render, illustration, anime, painting, synthetic AI appearance, blurry faces, low resolution, watermark, logo, random text, AI artifacts.`
},
  {
  id: "025",
  title: "Romantic Ocean Beach",
  image: "prompt-025.png",

  positive: `Create an ultra-realistic, cinematic lifestyle photograph of a romantic adult couple on a quiet ocean beach, closely inspired by the composition, pose, natural interaction, atmosphere, and peaceful mood of the reference image.

The photograph should feel warm, affectionate, spontaneous, elegant, and completely natural, like a genuine happy moment captured during a quiet evening walk by the ocean.

COMPOSITION & POSE

The couple stands barefoot on a wide stretch of smooth, slightly wet sand near the shoreline.

The man is standing naturally and securely while gently lifting the woman in his arms, supporting her comfortably around her hips and upper legs.

The woman naturally wraps her arms around his shoulders and neck while leaning toward him. Her posture is relaxed, graceful, feminine, and effortless, with soft natural movement throughout her body.

One of her legs hangs naturally alongside him, while the other leg is gracefully bent backward at the knee, creating a beautiful flowing silhouette.

The couple shares a gentle romantic kiss, with their heads naturally turned toward one another. Their facial profiles remain partially visible.

Their interaction should communicate affection, closeness, warmth, happiness, and genuine romantic chemistry.

The pose must look physically believable and comfortable, as though the man spontaneously lifted her during a playful romantic moment on the beach.

Avoid rigid fashion posing. Keep the shoulders relaxed, hands naturally positioned, fingers soft, and body language fluid and candid.

WOMAN — OUTFIT

The woman wears an elegant white two-piece summer beach outfit made from lightweight, softly flowing fabric.

The upper part is a refined fitted white top with a minimalist feminine design.

The lower part is a long white wrap-style maxi skirt with a high side slit at the thigh.

The slit naturally opens with her movement and reveals one leg up to the upper thigh, while the rest of the skirt remains long and flowing.

The skirt should fall naturally around her hips and legs with realistic folds and soft movement. A gentle coastal breeze lightly moves the fabric, adding an effortless feeling to the photograph.

The outfit should look elegant, feminine, sophisticated, lightweight, and appropriate for a beautiful beach setting.

Her skin has a natural healthy glow with realistic texture. Makeup is subtle and refined, enhancing her features without looking heavy or overly glamorous.

MAN — OUTFIT

The man wears a relaxed white lightweight linen shirt with the sleeves casually pushed or rolled slightly upward.

He wears neutral beige, sand, or taupe shorts with a clean, understated design.

He is barefoot.

His styling should look relaxed, masculine, refined, and naturally appropriate for the beach.

ENVIRONMENT

The couple is surrounded by a peaceful, nearly empty ocean beach.

Gentle waves roll softly toward the shore behind them. The dark, slightly wet sand subtly reflects the muted tones of the sky.

The ocean horizon remains visible in the distance.

Above them is a large softly overcast coastal sky with delicate layers of pale gray, warm cream, pearl, beige, and very subtle evening tones.

Maintain a large amount of open sky above the couple, creating a spacious, peaceful composition similar to the reference image.

The beach should feel quiet, secluded, natural, and serene.

No crowds, buildings, umbrellas, signs, boats, chairs, or distracting objects in the background.

LIGHTING & ATMOSPHERE

Use soft natural late-afternoon or early-evening coastal lighting, gently diffused through the cloudy sky.

Soft flattering illumination on both people, realistic skin tones, delicate highlights, gentle natural shadows, subtle atmospheric haze, and soft reflections across the wet sand.

The color palette is warm-neutral, muted, natural, and cinematic, with no excessive saturation.

The atmosphere should feel peaceful, dreamy, romantic, and authentic.

PHOTOGRAPHY

Ultra-realistic high-end lifestyle photography with subtle editorial polish.

Photographed from approximately eye level at a comfortable distance, using a natural documentary-style perspective.

The photographer captures the couple in a spontaneous moment rather than an intentionally staged pose.

Both people should have realistic human anatomy and natural body proportions.

Highly detailed natural skin texture, individual hair strands, anatomically correct hands and fingers, realistic legs and feet, natural fabric folds, detailed wet sand, authentic ocean waves, and realistic atmospheric depth.

Keep both people clearly focused and detailed while allowing the distant ocean and horizon to become subtly softer.

Natural photographic contrast, realistic dynamic range, delicate film-like texture, and sophisticated cinematic tonal grading.

FRAMING & FORMAT — VERY IMPORTANT

Exact vertical 3:4 aspect ratio.

Create a full-body composition, showing the couple completely from head to bare feet.

The woman’s entire bent leg and raised foot must remain visible inside the frame.

Do not crop heads, arms, hands, fingers, legs, or feet.

Position the couple approximately in the lower-middle portion of the vertical frame, leaving generous negative space above them.

The expansive cloudy sky should occupy a significant portion of the upper image, closely preserving the beautiful spacious composition of the reference.

The couple should remain the clear visual focus while still appearing naturally integrated into the surrounding beach landscape.

Final aesthetic: ultra-realistic romantic beach photography, natural affectionate interaction, graceful feminine pose, flowing long white maxi skirt with a high thigh slit revealing the leg up to the upper thigh, gentle kiss, soft cloudy evening light, candid lifestyle photography, sophisticated coastal atmosphere, realistic anatomy, full-body composition, exact vertical 3:4 aspect ratio.`,

  negative: `No stiff posing, no exaggerated body positioning, no excessive back arch, no awkward embrace, no unnatural leg placement, no distorted anatomy, no extra limbs, no duplicated body parts, no extra fingers, no fused fingers, no malformed hands, no distorted feet, no unrealistic proportions, no plastic skin, no excessive retouching, no waxy faces, no artificial expressions, no transparent clothing, no wardrobe malfunction, no excessive wind, no artificial-looking ocean, no harsh HDR, no oversaturation, no strong artificial lighting, no crowds, no distracting background elements.`
},
  {
  id: "026",
  title: "Tropical Sunset Kiss",
  image: "prompt-026.png",

  positive: `Create an ultra-realistic, intimate lifestyle photograph of a romantic adult couple on a tropical beach at sunset, inspired by the composition, atmosphere, body language, styling, and candid feeling of the reference image. The photograph should feel spontaneous, warm, sensual yet tasteful, as though someone quietly captured a genuine private moment between two people in love.

Couple & Interaction

A beautiful adult woman and an attractive adult man stand very close together on the soft sand near the shoreline, completely absorbed in each other.

They are sharing a gentle, natural kiss. Their pose should feel effortless and emotionally authentic rather than staged.

The woman stands facing the man with her body slightly turned toward the camera. She lovingly cups the sides of his face with both hands, her fingers resting naturally along his cheeks and jawline. Her arms are softly bent, creating an elegant feminine silhouette.

The man leans naturally toward her while wrapping both arms around her waist and lower back, holding her close. His hands rest naturally and affectionately around her waist. Their bodies are close together, conveying warmth, tenderness, and genuine romantic chemistry.

Their posture must remain relaxed, fluid, natural, and anatomically realistic, with no stiff posing.

Woman’s Outfit

The woman wears an elegant light cream / pale sage knitted beach dress with a refined minimalist aesthetic. The fabric is lightweight, finely knitted, slightly textured, and naturally follows the shape of her body.

The dress features:
- long fitted sleeves with subtly extended cuffs;
- a beautifully open low-cut back;
- delicate thin straps crossing or outlining the back;
- a fitted feminine silhouette;
- soft neutral tones that harmonize with the sunset and beach.

Her hair is styled in a sleek, elegant low bun, exposing her neck and emphasizing the open-back design of the dress.

She wears minimal gold jewelry: small-to-medium gold hoop earrings and several delicate gold rings.

Man’s Outfit

The man wears a relaxed oversized white or warm ivory T-shirt paired with loose, understated light-colored trousers. His outfit should feel sophisticated but effortless, appropriate for an upscale tropical beach vacation.

Environment

The couple stands directly beside the ocean on a beautiful secluded tropical beach.

Behind them are:
- calm turquoise-blue seawater;
- gentle waves reaching the shoreline;
- soft pale sand with realistic footprints and natural texture;
- several distant anchored sailboats;
- a subtle tropical coastline in the background;
- elegant white villas barely visible along the distant shore.

The setting should feel peaceful, exclusive, and naturally luxurious rather than crowded or commercial.

Sunset & Lighting

Capture the photograph during the final moments of blue hour immediately after sunset.

The horizon glows softly with pale golden-yellow and peach tones while the upper sky transitions into muted dusty blue. Several dramatic fluffy clouds catch beautiful warm coral, peach, and orange sunset light, creating a dreamy contrast against the cooler evening sky.

The couple is slightly shadowed from the backlighting, but their skin, clothing, hands, and silhouettes remain naturally detailed and visible.

Use soft ambient sunset illumination with subtle warm rim light, realistic shadows, gentle highlights on the skin, and natural tonal transitions.

Camera & Composition

Vertical 3:4 composition.

Photographed from approximately chest-to-eye level from a close conversational distance, creating the feeling that a friend captured the moment spontaneously.

Frame the couple approximately from the upper thighs upward, keeping their embrace and body language clearly visible while still showing enough of the ocean, horizon, and colorful sunset sky to establish the tropical setting.

Use a natural smartphone / premium compact-camera aesthetic rather than an overly polished studio look.

Approximately 35–50mm equivalent perspective, realistic proportions, moderate depth of field, subtle natural background softness without excessive artificial bokeh.

Overall Aesthetic

Ultra-photorealistic, candid luxury vacation photography, intimate romantic atmosphere, quiet Mediterranean or Caribbean beach evening, understated old-money resort aesthetic, natural chemistry, authentic affectionate body language, realistic skin texture, visible pores and fine skin details, realistic hands and fingers, natural fabric folds, subtle imperfections, cinematic sunset colors, soft evening shadows, sophisticated neutral wardrobe, genuine spontaneous moment, high dynamic range, realistic photography, premium editorial quality.

The final image should look like a real photograph of a couple caught in an intimate sunset moment, not like a posed fashion campaign or an AI-generated scene.`,

  negative: `cartoon, illustration, painting, CGI, 3D render, artificial-looking skin, plastic skin, excessive beauty filter, over-retouched faces, exaggerated body proportions, distorted anatomy, malformed hands, extra fingers, fused fingers, duplicated limbs, unnatural embrace, stiff pose, awkward kissing pose, floating jewelry, distorted clothing, overly dramatic studio lighting, excessive bokeh, oversaturated sunset, fake HDR, unrealistic ocean, warped horizon, excessive sharpening, low resolution, blur, noise, text, watermark, logo.`
},
  {
  id: "027",
  title: "Santa Monica Roller Skate Summer",
  image: "prompt-027.png",

  positive: `Create an ultra-realistic, cinematic lifestyle photograph of a young adult couple during a warm summer evening in Santa Monica, California, inspired closely by the composition, interaction, styling, lighting, and spontaneous atmosphere of the reference image. The photograph should feel candid, romantic, youthful, and effortlessly authentic — like a beautiful unplanned moment captured during a carefree day by the ocean.

Composition & Interaction

The couple is standing on a sunlit sidewalk near an elegant coastal café or restaurant.

The young man is crouching naturally in front of the woman, carefully helping her put on and fasten a vintage-style cream roller skate. His attention is focused on the skate as he gently adjusts it with both hands. His posture should feel completely natural and believable, with one knee bent deeply and the other leg supporting his crouched position.

The young woman stands beside him, balancing comfortably on one leg while slightly bending and lifting the other leg toward him so he can help with her roller skate. One of her hands rests lightly and affectionately on his shoulder for balance.

She looks down toward him with a soft, warm, genuine smile, creating a subtle romantic connection between them. Their interaction should feel affectionate without appearing staged — an intimate everyday gesture between a couple who are completely comfortable around each other.

Her second roller skate rests casually on the pavement beside her foot, reinforcing the spontaneous, documentary feeling of the scene.

Woman

A beautiful young adult woman with refined, naturally feminine features and a relaxed summer appearance.

She wears an oversized soft cream vintage T-shirt with delicate faded pink floral graphics across the front, loosely tucked into high-waisted pink-and-white vertically striped shorts.

Her outfit feels playful, feminine, slightly retro, and perfectly suited to a warm California summer evening.

A small vintage compact camera hangs naturally from a thin black strap around her neck, resting around her waist.

She wears layered delicate bracelets, a simple wristwatch, and subtle minimal jewelry.

White crew socks complement the vintage cream roller skates.

Her hair looks naturally tousled by the coastal breeze rather than perfectly styled. Makeup is minimal and fresh, with realistic skin texture and a subtle sun-kissed glow.

Man

A handsome young adult man wearing a simple slightly relaxed white T-shirt, loose beige/taupe trousers, and casual dark sneakers.

His outfit should feel understated, masculine, effortless, and slightly vintage.

His hair is naturally tousled and slightly messy, as though affected by the ocean breeze. His expression is calm and concentrated as he looks downward while fastening her roller skate.

Environment

The scene takes place outside an upscale coastal restaurant or café in Santa Monica, with dark architectural details, outdoor seating, steps, warm umbrellas, subtle signage, and palm trees visible in the background.

A restaurant employee may appear softly in the distant background to add depth and realism, but should remain secondary and unobtrusive.

Tall California palm trees rise against the bright evening sky, subtly establishing the coastal Los Angeles setting.

The sidewalk has realistic warm concrete texture, and the environment should feel lived-in rather than like a controlled photoshoot.

Lighting

Capture the scene during late golden hour, shortly before sunset.

Warm amber sunlight enters strongly from the side and behind the couple, producing beautiful natural rim light around the woman's hair, soft golden highlights across their skin and clothing, and long subtle shadows across the pavement.

The lighting should feel warm, nostalgic, cinematic, and naturally sun-drenched, with gentle highlights rather than artificial studio illumination.

Preserve realistic shadow detail and natural dynamic range.

Camera & Framing

Vertical 3:4 composition.

Full-body environmental portrait with both people clearly visible in the frame, including their legs, footwear, roller skates, and surrounding sidewalk.

Camera positioned approximately at waist-to-chest height, creating an intimate observational perspective.

Natural perspective similar to a premium 35mm documentary/lifestyle photograph.

Moderately shallow depth of field: the couple remains crisp and detailed while the café, palm trees, and distant background fall into a subtle realistic softness.

The framing should feel slightly imperfect and spontaneous rather than geometrically staged.

Overall Aesthetic

Ultra-realistic photography, premium editorial lifestyle photography, romantic California summer atmosphere, youthful coastal nostalgia, subtle 1990s-inspired styling, candid couple interaction, warm golden-hour sunlight, authentic body language, natural skin texture, realistic fabric folds, realistic hands and fingers, detailed vintage roller skates, subtle filmic grain, gentle analog warmth, sophisticated cinematic color grading, natural highlights, soft background separation, high dynamic range, photorealistic details.

The final photograph should look like a genuine candid memory from a carefree summer evening in Santa Monica rather than an AI-generated fashion shoot.`,

  negative: `stiff posing, artificial couple interaction, exaggerated romance, looking directly into camera, fashion-model pose, unnatural anatomy, distorted hands, extra fingers, missing fingers, fused fingers, malformed limbs, incorrect leg positions, duplicated roller skates, floating objects, distorted shoes, plastic skin, excessive skin smoothing, heavy makeup, artificial facial expressions, exaggerated body proportions, overly saturated colors, harsh HDR, artificial studio lighting, excessive background blur, fake bokeh, CGI appearance, 3D render, illustration, cartoon, obvious AI artifacts, text distortions, warped architecture`
},
  {
  id: "028",
  title: "Crimson Noir Couple",
  image: "prompt-028.png",

  positive: `Create an ultra-realistic, high-end cinematic fashion portrait of an elegant adult couple, closely inspired by the intimate composition, sophisticated styling, dark atmosphere, and emotional tension of the reference image.

Composition & Pose

Frame the couple in a tight vertical portrait, approximately from the chest/upper torso upward, with their faces as the main visual focus.

The woman stands slightly in front of the man, while he is positioned very close behind and slightly to one side of her. Their bodies naturally overlap, creating an intimate, layered composition.

The woman gently tilts her head toward him, her posture relaxed, elegant, and subtly sensual without looking posed or stiff. She looks directly into the camera with a calm, magnetic, self-assured expression, her lips softly parted.

The man leans slightly toward her, his face positioned close to her temple and hair. His head is lowered as he looks tenderly toward her face rather than toward the camera. Their proximity should suggest quiet chemistry, intimacy, and restrained romantic tension.

Keep both faces clearly visible and naturally proportioned. The pose must feel effortless and spontaneous rather than staged.

Woman

A beautiful adult woman with luxurious light-blonde hair, styled in soft, polished waves with natural movement and volume. A few delicate strands fall loosely around her face.

She has refined feminine facial features, softly sculpted cheekbones, realistic fair skin with visible natural texture, subtle pores, delicate highlights, and sophisticated glamorous makeup.

Her eyes are light hazel-green, luminous and highly detailed, with realistic iris texture and subtle catchlights.

Makeup is elegant and cinematic: softly sculpted brows, neutral taupe-brown eyeshadow, refined black eyeliner, long defined lashes, subtle contouring, and luminous skin.

Her lips are painted a rich classic deep-red shade, with an elegant satin finish.

She wears an elegant strapless deep-red dress or fitted evening top, complemented by a refined red satin neck scarf/choker wrapped elegantly around her neck. Small understated earrings complete the look.

Man

The man has a masculine, refined appearance with dark hair, naturally styled with soft texture and volume.

He has defined facial features, a strong jawline, and neatly groomed short facial hair. His appearance should feel sophisticated, masculine, and editorial rather than overly polished.

He wears a perfectly tailored black blazer over an elegant black dress shirt. The shirt is completely buttoned up all the way to the collar, with every visible button fastened and no exposed chest or neckline. The all-black styling should look sleek, sophisticated, minimal, and luxurious, allowing the woman's deep-red outfit to become the primary color accent in the composition.

Lighting — Dramatic Soft Chiaroscuro

Use dramatic yet exceptionally soft cinematic chiaroscuro lighting.

A large, diffused key light comes softly from one side and slightly above the couple, delicately sculpting their faces instead of illuminating them evenly.

The woman's face receives the most beautiful controlled illumination: soft light gracefully traces her forehead, cheekbones, nose, lips, collarbones, and shoulders while gradually dissolving into shadow along the opposite side.

The man's face is slightly darker, partially emerging from the shadows behind her, creating additional depth, mystery, and visual hierarchy.

Create deep, velvety blacks and smooth shadow transitions, with no harsh flash effect and no aggressively clipped shadows. Shadows should remain rich and dimensional, with subtle detail still visible.

Add an extremely subtle warm rim light along selected edges of the woman's blonde hair and the contours of the couple, separating them delicately from the black background.

The lighting should feel reminiscent of an intimate luxury fashion campaign photographed in a dark studio, with a painterly quality: controlled highlights, soft falloff, dramatic negative space, luminous skin against darkness, and sophisticated chiaroscuro.

Color & Atmosphere

Use a luxurious restricted palette of deep crimson red, rich black, warm natural skin tones, and luminous champagne-blonde hair.

The man's clothing must remain entirely black — black blazer and fully buttoned black shirt — with absolutely no red clothing or red fabric on him.

The background is completely dark and minimal, almost black, with no distracting objects or visible environment.

The atmosphere should feel romantic, mysterious, sophisticated, cinematic, intimate, and slightly nocturnal, like a private moment captured during an exclusive evening editorial shoot.

Photography & Realism

Ultra-photorealistic professional photography, premium full-frame camera, 85mm portrait-lens aesthetic, shallow depth of field, sharp focus on both faces and especially the eyes, realistic skin texture, individual hair strands, natural fabric texture, subtle cinematic grain, rich tonal range, controlled highlights, smooth highlight-to-shadow transitions, realistic anatomy, elegant editorial color grading.

Vertical 3:4 composition.`,

  negative: `red shirt on the man, burgundy shirt on the man, open shirt, unbuttoned collar, exposed male chest, visible undershirt, tie, harsh direct flash, flat frontal lighting, excessive brightness, crushed facial shadows, artificial plastic skin, excessive skin smoothing, orange skin tones, exaggerated makeup, unnatural body positioning, stiff poses, distorted facial features, crossed eyes, overly blurred faces, artificial hair texture, excessive HDR, oversaturation, cartoonish rendering, obvious AI artifacts.`
},
  {
  id: "029",
  title: "Vintage Photobooth Kiss",
  image: "prompt-029.png",

  positive: `Create an ultra-realistic, cinematic lifestyle photograph of a young adult couple sharing a tender romantic moment inside a vintage street photobooth, closely inspired by the reference image in composition, framing, body positioning, intimate atmosphere, lighting, and nostalgic analog-film aesthetic, while changing their clothing and styling as described below.

The couple stands closely together inside the narrow entrance of an old-fashioned metallic photobooth. A deep red heavy curtain is pulled partly aside, naturally framing them and creating a secluded, intimate feeling. The surrounding booth is made of slightly worn brushed metal with small strips of black-and-white sample photographs attached to the exterior, giving the scene an authentic retro urban character.

Woman

The woman is wearing a short, lightweight pale-yellow summer dress with delicate ruffles. The dress should feel airy, feminine, playful and effortless, made from soft flowing fabric that falls naturally around her body. Subtle ruffled details decorate the neckline, skirt or sleeves without making the outfit overly elaborate.

On her feet are clean white high-top Converse-style sneakers, creating a charming contrast with the romantic yellow dress.

Her hair is worn completely loose and styled into beautiful, luxurious, soft flowing curls. The curls are voluminous, polished and feminine, with natural movement and dimension rather than looking stiff or overly styled. Soft glossy waves and defined loose curls gently frame her face and cascade naturally around her shoulders.

Man

The man is dressed in a sophisticated but relaxed light-colored linen outfit: a lightweight short-sleeved linen shirt paired with matching light linen trousers. The shirt has a natural relaxed fit and subtle realistic linen texture with gentle wrinkles and folds.

He wears minimalist casual sneakers that harmonize naturally with the light neutral outfit.

Body Proportions & Height

Both people must have completely realistic, anatomically accurate human body proportions and natural adult physiques. Their heads, shoulders, torsos, arms, hands, hips and legs must be correctly proportioned to their overall height, with no elongated limbs, oversized heads, unnaturally narrow bodies or distorted anatomy.

Maintain a believable and realistic height difference between the couple. Their relative scale must remain physically consistent from head to toe, taking their footwear, posture and position inside the booth into account. Neither person should appear unnaturally tall, miniature or disproportionately sized compared with the other.

Perspective must remain physically accurate, with no artificial stretching or compression of their bodies caused by the camera angle. Their feet should naturally connect with the floor, their bodies should have realistic centers of gravity, and their close interaction must remain anatomically believable.

Pose & Interaction

Recreate the intimate energy of the reference: the couple stands extremely close together inside the photobooth, naturally turned toward one another.

The man gently cups the side of the woman’s face with one hand while his other arm stays close around her. The woman lightly holds his wrist or rests her hand against his arm. Their bodies naturally lean toward each other as they share a soft romantic kiss.

Their posture should feel completely spontaneous and believable rather than staged — relaxed shoulders, natural hand placement, subtle body contact and genuine tenderness. The moment should look as though the photographer accidentally captured them during a private second together.

The woman’s yellow dress and bare legs remain clearly visible, as well as her white high-top sneakers. The man’s linen shirt and trousers should also be clearly readable in the frame.

Lighting & Atmosphere

Use warm late-afternoon golden sunlight entering diagonally from outside the booth. The sunlight catches the edges of their faces, clothing and the woman’s loose curls while the interior behind them remains considerably darker.

Create beautiful cinematic chiaroscuro with warm highlights, deep soft shadows and subtle reflected light from the metallic booth walls. The yellow dress should glow gently in the sunlight, while the red curtain adds a rich warm contrast.

The photograph should have a nostalgic 35mm analog-film feeling: subtle fine grain, slightly muted warm colors, soft highlight roll-off, gentle imperfections and natural contrast. Avoid overly clean digital sharpness.

Camera & Composition

Vertical composition, approximately 3:4 aspect ratio. Full-body or nearly full-body framing so their outfits and footwear remain visible. Eye-level candid perspective, as if photographed discreetly from just outside the photobooth.

Use a natural photographic perspective similar to a 50mm lens, avoiding wide-angle distortion. The camera perspective must preserve realistic body proportions and the natural relative height of both people.

Ultra-realistic photography, authentic skin texture, realistic fabric texture, naturally detailed loose curls, anatomically correct adult bodies, realistic body-to-head ratios, natural limb lengths, believable height difference, consistent human scale, accurate perspective, realistic hands and fingers, cinematic golden-hour lighting, warm vintage color grading, subtle film grain, intimate storytelling, spontaneous romantic chemistry, premium editorial photography, realistic shadows, no artificial CGI appearance.`,

  negative: `unrealistic height difference, disproportionate bodies, oversized or undersized heads, excessively long legs, elongated torsos, stretched limbs, warped perspective, miniature-looking person, distorted anatomy, extra fingers or limbs, ponytail, bun, updo, tied-back hair, stiff or artificial curls, stiff posing, exaggerated kissing pose, plastic skin, excessive beauty retouching, overly saturated yellow, neon colors, modern futuristic photobooth design, harsh flash, excessive background blur, cartoonish or painterly appearance.`
}
];
