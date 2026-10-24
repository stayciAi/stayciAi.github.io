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
},
  {
  id: "030",
  title: "Butter Yellow Morning",
  image: "prompt-030.png",

  positive: `Create an ultra-realistic, high-end lifestyle photograph of a romantic couple during a quiet morning at home, captured through a large wall mirror in an elegant, softly lit interior. The image should feel intimate, luxurious, natural, and effortlessly candid, like a genuine private morning moment photographed on a smartphone.

Composition & Pose

A woman is sitting comfortably in a plush cream boucle armchair directly in front of a large mirror. She sits elegantly with one bare leg crossed over the other, relaxed but graceful.

She is taking a mirror selfie with a dark smartphone held vertically in one hand, positioned beside her face so that her facial features remain clearly visible. In her other hand, she casually holds a small white ceramic coffee cup near chest level.

A man stands closely behind the armchair, leaning gently toward her. He tenderly kisses the woman on her temple, his lips naturally touching the side of her towel-wrapped head in a soft, affectionate gesture. The kiss should look spontaneous and physically natural, like a genuine private moment between a couple.

The woman reacts to his kiss with a warm, genuine, affectionate smile, visibly enjoying the moment. Her expression is soft and happy, with relaxed eyes and a subtle natural smile rather than an exaggerated posed expression.

Their bodies remain positioned very close together, communicating comfortable intimacy, tenderness, familiarity, and affection.

The woman's face remains clearly visible in the mirror despite the man's kiss. The man's face is visible naturally in a partial three-quarter/profile angle as he leans toward her temple.

Woman

The woman wears a luxuriously fluffy pale pastel-yellow bathrobe, loosely and naturally wrapped around her body and tied at the waist. The color should be a delicate creamy butter-yellow, soft and sophisticated rather than bright or saturated.

The robe has an exceptionally soft, plush, fluffy texture with realistic fibers, folds, seams, and volume, creating a cozy and tactile appearance.

Her hair is completely wrapped inside a matching fluffy pale-yellow bath towel, twisted naturally around her head as if she has just stepped out of the shower. The towel is exactly the same delicate pastel butter-yellow shade as the bathrobe, creating a harmonious monochromatic look.

She has natural, refined beauty with realistic skin texture, subtle morning makeup, softly defined eyebrows, delicate lashes, natural lips, and no glasses. Avoid excessive glam makeup or artificial beauty filtering.

Her dark manicure is naturally visible as she holds the smartphone and coffee cup.

Man

The man wears a simple white oversized T-shirt with a relaxed, loose silhouette, slightly dropped shoulders, and naturally draping fabric. The T-shirt should look soft, premium, comfortable, and effortlessly casual, with realistic cotton texture and subtle natural folds.

Keep his overall styling minimal and relaxed, creating the impression of a comfortable morning at home.

He has subtle facial stubble and a gentle, affectionate expression as he kisses the woman softly on her temple.

Interior

The setting is a bright, sophisticated luxury bedroom or dressing-room interior with warm ivory and cream tones.

Behind the couple are elegant white wall panels with classic rectangular molding, creating a clean European-inspired interior. A large mirror frames the composition vertically.

The armchair is upholstered in soft cream boucle fabric, with visible tactile texture and rounded comfortable proportions.

Keep the background minimalist, uncluttered, expensive-looking, and softly residential rather than resembling a hotel or photography studio.

Lighting & Atmosphere

Use soft natural morning daylight coming from a large window to the side, producing gentle highlights across their faces and subtle realistic shadows.

The lighting should be bright and airy but not overexposed, with warm neutral whites, creamy highlights, delicate skin tones, and soft dimensional contrast.

The atmosphere should communicate quiet intimacy, tenderness, slow morning luxury, warmth, comfort, romance, and effortless elegance. The kiss on the temple and the woman's warm smile should feel like a naturally captured affectionate moment rather than a staged pose.

Photographic Style

Ultra-realistic smartphone mirror photography, authentic candid lifestyle aesthetic, spontaneous romantic interaction, realistic human anatomy, natural body proportions, highly detailed skin texture, realistic fluffy fabric fibers, subtle imperfections, natural reflections, physically accurate mirror perspective, soft depth of field, balanced exposure, premium editorial lifestyle photography, understated luxury aesthetic, crisp facial detail, natural color grading, photorealistic, high resolution.`,

  negative: `bright or saturated yellow clothing, pink bathrobe, white towel, fitted T-shirt, long-sleeved shirt on the man, both people staring seriously at the camera, emotionless expression on the woman, exaggerated smile, unnatural kissing pose, obscured female face, distorted hands or fingers, incorrect mirror reflections, warped smartphone, duplicated objects, unnatural anatomy, plastic skin, excessive retouching, artificial studio lighting, overly saturated colors, cluttered background, text, logos, watermarks.`
},
  {
  id: "031",
  title: "Morning Kitchen Pastry",
  image: "prompt-031.png",

  positive: `Create an ultra-realistic, candid lifestyle photograph of a young adult couple sharing a sweet, intimate breakfast moment in a beautiful modern kitchen, inspired closely by the atmosphere, composition, and interior of the reference image.

The scene takes place in a bright, elegant kitchen illuminated by soft natural morning daylight. The interior features deep forest-green cabinetry, a large white-and-gray veined marble kitchen island, a black vintage-style range cooker, warm wooden details, open shelving with ceramic cups, and a large sculptural white range hood. The atmosphere should feel cozy, sophisticated, intimate, and genuinely lived-in.

Couple & Interaction — Very Important

The woman is sitting naturally on the edge of the marble kitchen island, facing the man. Her legs are comfortably apart, and the man is standing naturally between her legs, close to her body. The pose should look affectionate and romantic but completely tasteful and non-explicit.

The man gently wraps both arms around the woman's hips and upper thighs, holding her affectionately while standing close to her. His hands rest naturally and respectfully against the outer sides of her hips/thighs. His posture is relaxed and tender rather than suggestive.

The woman is holding one small bite-sized pastry — such as a tiny croissant or small piece of freshly baked pastry — between her fingers and bringing it directly toward the man's mouth, as though she is about to feed him.

The pastry should be clearly visible just in front of his lips, capturing the playful moment immediately before he takes a bite.

The man turns his face upward toward the woman and looks directly into her eyes with a warm, affectionate expression and a gentle genuine smile. His attention is completely focused on her.

The woman looks back at him naturally while feeding him, with a subtle happy expression.

Their interaction should communicate tenderness, familiarity, playfulness, and quiet romantic chemistry, like a spontaneous private moment between a real couple during breakfast.

Face Visibility & Camera Angle

Both people's faces must be clearly visible to the camera.

Position the couple at a natural three-quarter angle rather than photographing them from behind. Their heads and facial features should remain unobstructed even though they are looking at each other.

The camera should capture the man's affectionate upward gaze toward the woman, his visible gentle smile, the woman's face as she looks down toward him, the small pastry positioned near his mouth, his arms naturally embracing her hips and thighs, and the woman's seated position with the man standing between her legs.

Avoid hiding either face behind hair, shoulders, hands, or the pastry.

Woman

The woman has a feminine, elegant appearance with naturally styled blonde hair.

She is not wearing glasses.

Her face should have realistic proportions, authentic skin texture, subtle natural makeup, and a relaxed expression.

She wears an oversized white graphic T-shirt similar to the reference image, featuring a stylish vintage-inspired toast, breakfast, or retro café graphic. The shirt hangs loosely and naturally over her body.

Her outfit underneath remains minimal and mostly concealed by the oversized T-shirt.

Man

The man has a masculine, relaxed appearance with naturally styled dark hair. Do not specify or emphasize his hair length.

He wears a coordinated oversized white graphic T-shirt featuring a large vintage-inspired toast/breakfast illustration and retro typography.

Subtle tattoos may be visible on his forearms.

His expression is particularly important: he is looking tenderly at the woman with a soft, genuine smile, visibly enjoying the playful moment as she feeds him.

Photography & Mood

The image should feel like a real spontaneous photograph taken at home during a slow morning together, rather than a staged professional photoshoot.

Use soft natural window light, realistic shadows, warm neutral highlights, authentic skin texture, realistic anatomy, natural fabric folds, detailed marble textures, subtle photographic depth of field, and slightly imperfect candid framing.

The body positioning must remain anatomically believable and natural, especially the man's arms around the woman's hips and thighs and his position between her legs.

Keep the surrounding kitchen clearly recognizable while making the couple the visual focus.

The final image should have the aesthetic of a high-end Pinterest lifestyle photograph or intimate editorial snapshot — romantic, playful, cozy, effortless, photorealistic, and believable.`,

  negative: `glasses on woman, sunglasses, hidden female face, hidden male face, back-facing pose, faces obscured by hair, faces obscured by hands, pastry covering face, both people looking at camera, emotionless expressions, exaggerated sexual posing, explicit pose, stiff interaction, man standing outside woman's legs, incorrect seated position, distorted embrace, unnatural arm placement, malformed hands, extra fingers, missing fingers, fused fingers, extra limbs, duplicated limbs, distorted anatomy, unrealistic body proportions, floating pastry, multiple pastries near mouth, oversized pastry, malformed food, plastic skin, excessive beauty filtering, excessive skin smoothing, artificial expressions, warped kitchen island, distorted marble, cluttered background, harsh studio lighting, excessive HDR, oversaturated colors, excessive bokeh, CGI, 3D render, illustration, cartoon, obvious AI artifacts, text, logo, watermark.`
},
  {
  id: "032",
  title: "Champagne Noir",
  image: "prompt-032.png",

  positive: `Ultra-realistic luxury evening fashion portrait of a glamorous young adult woman, faithfully recreating the elegant composition, pose, outfit, champagne moment and sophisticated party atmosphere of the reference image.

The woman is standing beside a white-clothed table, photographed in a graceful three-quarter side profile from approximately mid-thigh upward. Her torso is angled toward the left side of the frame while her head turns slightly downward toward a champagne coupe in her hand. Her lips are softly pursed in a playful, elegant expression. One arm extends naturally forward holding the glass by its stem while her other hand rests gracefully against the side of her upper thigh.

She has long light-blonde hair, styled into a sophisticated loose low updo, while several long soft blonde face-framing strands remain free around her cheeks and neck. The hairstyle must clearly retain the impression of naturally long hair gathered at the back, not short hair. Creamy light-blonde tones, realistic individual strands and subtle flyaways.

Her eyes are deep dark brown. Refined feminine facial proportions with softly sculpted cheekbones, defined brows, elegant jawline, delicate straight nose and full glossy nude-pink lips. Sophisticated evening makeup with softly smoked eyes, defined lashes, subtle eyeliner, warm contour and luminous skin. Preserve realistic pores, fine skin texture and natural tonal variation.

She wears an elegant black satin halter-neck mini dress, closely following the reference. The softly gathered satin neckline attaches at the center of the neck, leaving the shoulders and upper back exposed. The dress has dramatically open sides and a fitted black satin mini skirt. Around the hips is a voluminous black feather trim, creating a luxurious textural contrast between glossy satin and soft feathers. Realistic fabric folds, satin highlights and individually defined feather texture.

Accessories include an elegant diamond tennis necklace following the neckline and large sparkling diamond drop earrings. Jewelry should have sophisticated realistic reflections rather than exaggerated artificial sparkle.

She holds a vintage-inspired ribbed crystal champagne coupe decorated with a delicate narrow black satin bow tied around the stem. On the table beside her is an artistic pyramid-like arrangement of matching empty crystal coupe glasses at different heights, each decorated with elegant black ribbon bows.

From the far left edge of the frame, only the arm and hand of a formally dressed server are visible: black suit sleeve and immaculate white service glove, holding a champagne bottle tilted naturally toward her glass as if about to pour. Keep the server mostly outside the frame, matching the candid composition of the reference.

The background consists of elegant floor-to-ceiling soft white curtains with subtle folds, creating a minimalist upscale private-event setting. A white tablecloth fills the lower-left foreground beneath the champagne-glass arrangement.

Soft warm indoor illumination combined with subtle direct-camera flash creates an authentic upscale evening-event photograph. Natural highlights across her skin, blonde hair, satin dress, diamonds and crystal glassware; realistic shadows and reflections.

Captured as an authentic luxury private-party photograph, sophisticated champagne-event aesthetic, premium fashion photography with a slightly spontaneous social-media quality, realistic full-frame camera rendering, natural depth of field, subtle photographic grain, realistic skin microtexture, accurate hands and fingers, physically believable crystal transparency, no CGI appearance, no plastic skin, no excessive retouching.

Three-quarter portrait from approximately mid-thigh upward, woman occupying the center-right of the frame, champagne-glass arrangement filling the lower-left foreground, server's gloved hand and bottle entering from the far left, soft white curtains filling the entire background.`,

  negative: `brunette hair, black hair, red hair, short hair, bob haircut, pixie cut, hair appearing naturally short, fully loose hairstyle, high ponytail, high bun, blue eyes, green eyes, gray eyes, hazel eyes, wrong pose, front-facing pose, looking directly at camera, exaggerated expression, broad smile, wrong dress, white dress, red dress, long dress, sleeves, closed sides, missing feather trim, white feathers, colored feathers, malformed feathers, cheap fabric, matte satin, missing necklace, missing earrings, excessive jewelry, fake diamonds, oversized jewelry, missing champagne glass, wine glass, tumbler, plastic glass, malformed crystal, opaque glass, duplicated glass in hand, missing black bow, oversized bow, malformed glass pyramid, floating glasses, broken glass, server fully visible, extra people, missing white glove, malformed server hand, extra fingers, missing fingers, fused fingers, distorted hands, champagne bottle fused with hand, bottle floating, incorrect pouring angle, distorted anatomy, exaggerated body proportions, plastic skin, waxy skin, excessive smoothing, artificial beauty filter, harsh shadows, blown highlights, excessive flash, dark curtains, colored curtains, cluttered background, CGI, 3D render, illustration, anime, low resolution, blurry face, watermark, logo, text, AI artifacts.`
},
  {
  id: "033",
  title: "Midnight Cocktail",
  image: "prompt-033.png",

  positive: `Ultra-realistic luxury nighttime restaurant portrait of a beautiful young adult woman, 23–28 years old, seated at an elegant open-air restaurant. Recreate the seated pose, cocktail gesture, white flowing outfit, warm lighting, wooden pergola, hanging lights, greenery and sophisticated evening atmosphere.

IDENTITY IS THE HIGHEST PRIORITY: preserve her exact recognizable facial structure, proportions, nose, lips, eyes, eyebrows, jawline, chin, natural body proportions and seamless face-to-body skin tone. No face blending or redesign.

She has deep dark espresso-brown eyes and long light-blonde hair styled into a sleek low bun, with realistic blonde roots, baby hairs and delicate loose strands. Sophisticated warm evening makeup, glossy nude-pink lips, realistic pores and natural skin texture.

POSE: seated behind a white-linen table, framed from waist upward. One forearm rests near the table; the other hand holds a clear rounded cocktail glass near her lips, containing a pale drink, ice and lime. She looks toward the camera with a relaxed, confident expression. Perfect anatomical hands, five fingers, almond-shaped manicure.

OUTFIT: elegant flowing ivory-white deep-V evening top/dress with voluminous long bishop sleeves, soft chiffon/crepe texture and realistic folds. Minimal gold earrings.

BACKGROUND: upscale Mediterranean/tropical restaurant at night with wooden pergola, warm string lights, lush greenery, cream seating and subtle patio-heater flames.

Warm flattering restaurant lighting, natural shadows, realistic glass transparency, condensation and reflections. 50mm full-frame look, shallow natural depth of field, warm bokeh, 8K luxury photorealism.

FINAL PRIORITY: exact identity, dark-brown eyes, long blonde hair in low updo, seamless skin tone, natural proportions, cocktail pose, white outfit, warm restaurant atmosphere, maximum realism.`,

  negative: `wrong identity, copied face, blended face, generic AI model, altered facial features, blue eyes, green eyes, gray eyes, hazel eyes, brunette hair, black hair, red hair, short hair, wig, changed body proportions, enlarged breasts, tiny waist, face-body skin mismatch, orange skin, plastic skin, excessive smoothing, bad anatomy, extra fingers, fused fingers, malformed hands, wrong pose, wrong outfit, black dress, bikini, transparent bodice, exposed nipples, wrong drink, distorted glass, daytime, nightclub, studio, missing pergola, missing greenery, cold lighting, neon, harsh flash, fisheye, distorted face, CGI, 3D render, anime, illustration, blur, low resolution, AI artifacts, watermark, logo, text.`
},
  {
  id: "034",
  title: "Midnight Corset",
  image: "prompt-034.png",
    imagePosition: "center 18%",

  positive: `Ultra-realistic luxury fashion portrait of a glamorous young adult woman, 24–28, against a deep warm charcoal-brown minimalist background. Recreate the front-facing upper-body framing, both arms raised behind the head, elbows outward, windswept hair across the face, black corset outfit, sheer opera gloves, layered necklaces and dark cinematic mood.

IDENTITY IS THE HIGHEST PRIORITY: preserve her exact recognizable face, facial proportions, eyes, nose, lips, cheekbones, jawline, chin, natural body proportions and complexion. Never copy, blend or redesign another woman’s identity.

She has deep dark espresso-brown eyes and long light-blonde champagne/beige-blonde hair, loose and voluminous in tousled waves. Her hands lift the hair naturally while several blonde strands sweep across the forehead, cheek, nose and partially over one eye. Realistic individual hairs and flyaways.

Maintain one seamless warm golden-beige skin tone across face, neck, chest, shoulders, arms and body, with realistic pores, peach fuzz and natural texture.

POSE: torso nearly frontal, both hands behind/in the hair, elbows spread outward, shoulders anatomically relaxed. Direct confident gaze through loose strands, sensual mysterious expression, lips gently parted. Preserve her authentic body shape without enlarged breasts, tiny waist or exaggerated curves.

OUTFIT: elegant black strapless corset-style bodysuit with matte structured fabric and tasteful semi-sheer mesh midriff. Long sheer black mesh gloves above the elbows, realistically revealing skin beneath. Add delicate layered silver/dark-metal necklaces.

Sophisticated smoky taupe/charcoal makeup, defined lashes, subtle contour and nude rose-beige glossy lips.

LIGHTING: cinematic low-key soft directional light sculpting the face, shoulders and collarbones, with subtle rim light separating blonde hair from the dark background. Rich shadows while retaining black fabric and mesh detail.

CAMERA: framed from above the hair to upper hips, approximately 85mm portrait lens. Face centered between raised arms, sharp eyes, natural depth of field.

Ultra-photorealistic, exact identity, dark-brown eyes, long blonde windswept hair, seamless golden-beige skin, perfect anatomy, black corset, sheer gloves, arms behind head, cinematic dark background, realistic skin/hair/fabric texture, luxury 8K photography.`,

  negative: `wrong identity, blended face, generic AI model, altered face, changed nose, enlarged lips, doll face, face-swap artifacts, blue/green/gray/hazel/light eyes, brunette/black/red/short hair, bob, ponytail, bun, wig, yellow/orange blonde, plastic hair, face-body skin mismatch, orange skin, plastic/waxy/poreless skin, excessive smoothing, changed body proportions, enlarged breasts, tiny waist, exaggerated hips, distorted shoulders, bad anatomy, extra/missing arms, malformed hands, extra/fused fingers, broken wrists, arms down, wrong pose, wrong outfit, dress, jacket, latex, missing corset, missing mesh, exposed nipples, excessive transparency, missing/opaque/short gloves, bright background, outdoor setting, nightclub, harsh flash, flat/neon lighting, fisheye, distorted face/body, CGI, 3D render, anime, illustration, blur, low resolution, AI artifacts, watermark, logo, text.`
},
  {
  id: "035",
  title: "Champagne After Dark",
  image: "prompt-035.png",

  positive: `Ultra-realistic luxury evening fashion portrait of a glamorous young adult woman, faithfully recreating the elegant composition, pose, outfit, champagne moment and sophisticated party atmosphere of the reference image.

The woman is standing beside a white-clothed table, photographed in a graceful three-quarter side profile from approximately mid-thigh upward. Her torso is angled toward the left side of the frame while her head turns slightly downward toward a champagne coupe in her hand. Her lips are softly pursed in a playful, elegant expression. One arm extends naturally forward holding the glass by its stem while her other hand rests gracefully against the side of her upper thigh.

She has long light-blonde hair, styled into a sophisticated loose low updo, while several long soft blonde face-framing strands remain free around her cheeks and neck. The hairstyle must clearly retain the impression of naturally long hair gathered at the back, not short hair. Creamy light-blonde tones, realistic individual strands and subtle flyaways.

Her eyes are deep dark brown. Refined feminine facial proportions with softly sculpted cheekbones, defined brows, elegant jawline, delicate straight nose and full glossy nude-pink lips. Sophisticated evening makeup with softly smoked eyes, defined lashes, subtle eyeliner, warm contour and luminous skin. Preserve realistic pores, fine skin texture and natural tonal variation.

She wears an elegant black satin halter-neck mini dress, closely following the reference. The softly gathered satin neckline attaches at the center of the neck, leaving the shoulders and upper back exposed. The dress has dramatically open sides and a fitted black satin mini skirt. Around the hips is a voluminous black feather trim, creating a luxurious textural contrast between glossy satin and soft feathers. Realistic fabric folds, satin highlights and individually defined feather texture.

Accessories include an elegant diamond tennis necklace following the neckline and large sparkling diamond drop earrings. Jewelry should have sophisticated realistic reflections rather than exaggerated artificial sparkle.

She holds a vintage-inspired ribbed crystal champagne coupe decorated with a delicate narrow black satin bow tied around the stem. On the table beside her is an artistic pyramid-like arrangement of matching empty crystal coupe glasses at different heights, each decorated with elegant black ribbon bows.

From the far left edge of the frame, only the arm and hand of a formally dressed server are visible: black suit sleeve and immaculate white service glove, holding a champagne bottle tilted naturally toward her glass as if about to pour. Keep the server mostly outside the frame, matching the candid composition of the reference.

The background consists of elegant floor-to-ceiling soft white curtains with subtle folds, creating a minimalist upscale private-event setting. A white tablecloth fills the lower-left foreground beneath the champagne-glass arrangement.

Soft warm indoor illumination combined with subtle direct-camera flash creates an authentic upscale evening-event photograph. Natural highlights across her skin, blonde hair, satin dress, diamonds and crystal glassware; realistic shadows and reflections.

Captured as an authentic luxury private-party photograph, sophisticated champagne-event aesthetic, premium fashion photography with a slightly spontaneous social-media quality, realistic full-frame camera rendering, natural depth of field, subtle photographic grain, realistic skin microtexture, accurate hands and fingers, physically believable crystal transparency, no CGI appearance, no plastic skin, no excessive retouching.

Three-quarter portrait from approximately mid-thigh upward, woman occupying the center-right of the frame, champagne-glass arrangement filling the lower-left foreground, server's gloved hand and bottle entering from the far left, soft white curtains filling the entire background.`,

  negative: `brunette hair, black hair, red hair, short hair, bob haircut, pixie cut, hair appearing naturally short, fully loose hairstyle, high ponytail, high bun, blue eyes, green eyes, gray eyes, hazel eyes, wrong pose, front-facing pose, looking directly at camera, exaggerated expression, broad smile, wrong dress, white dress, red dress, long dress, sleeves, closed sides, missing feather trim, white feathers, colored feathers, malformed feathers, cheap fabric, matte satin, missing necklace, missing earrings, excessive jewelry, fake diamonds, oversized jewelry, missing champagne glass, wine glass, tumbler, plastic glass, malformed crystal, opaque glass, duplicated glass in hand, missing black bow, oversized bow, malformed glass pyramid, floating glasses, broken glass, server fully visible, extra people, missing white glove, malformed server hand, extra fingers, missing fingers, fused fingers, distorted hands, champagne bottle fused with hand, bottle floating, incorrect pouring angle, distorted anatomy, exaggerated body proportions, plastic skin, waxy skin, excessive smoothing, artificial beauty filter, harsh shadows, blown highlights, excessive flash, dark curtains, colored curtains, cluttered background, CGI, 3D render, illustration, anime, low resolution, blurry face, watermark, logo, text, AI artifacts.`
},
  {
  id: "036",
  title: "Timeless Embrace",
  image: "prompt-036.PNG",

  positive: `Without changing the appearance or facial features of the people from photos 1 and 2, use photo 3 as the reference for the composition, pose, framing, lighting, and overall emotional atmosphere.

In this black-and-white image, an intimate and touching scene captures a man and a woman embracing in a tender gesture of closeness, affection, and trust. The woman stands facing the man with her eyes gently closed and a soft, peaceful smile on her face, expressing inner serenity and quiet happiness. Her head is slightly tilted forward, while her arms are wrapped naturally around the man's neck, creating a strong sense of protection, connection, and emotional unity.

The smooth skin of the woman's bare back is visible, delicately illuminated by soft side lighting that emphasizes its natural texture and the graceful, flowing lines of her body. The lighting remains refined and subtle, creating gentle tonal transitions across her silhouette.

The man is wearing a dark shirt with a clearly visible, tactile fabric texture. He leans his head slightly forward and gently kisses the woman on the forehead, conveying warmth, tenderness, care, and affection in this quiet moment. His face is softly but clearly illuminated, revealing realistic skin texture and subtle stubble along his chin and jawline, adding masculinity, depth, and natural realism to his appearance.

A delicate balance between light and shadow creates expressive monochrome contrast, giving the composition emotional depth while emphasizing both the strength and tenderness of their connection. The black-and-white treatment features rich tonal gradation, deep blacks, luminous highlights, and beautifully controlled midtones.

The background is softly blurred and neutral, keeping all attention focused on the couple and reinforcing the feeling of privacy, intimacy, and comfort. The composition is carefully constructed so that the viewer's eye naturally follows the lines of their bodies and embrace, capturing a sincere moment of emotional attachment.

The overall mood is filled with harmony, tenderness, trust, and quiet happiness. The photograph feels sophisticated, elegant, and timeless, preserving an authentic moment of closeness between two people as though frozen in time.

Photorealistic black-and-white photography, preserve the exact identity and recognizable facial features of the people from reference photos 1 and 2, photo 3 as the visual reference for pose and composition, realistic skin texture, natural anatomy, soft directional side lighting, delicate highlights and shadows, cinematic monochrome tonality, shallow depth of field, subtle film-like character, highly detailed fabric and skin textures, premium photography, ultra-high quality, 8K resolution.`,

  negative: `changed identity, different woman, different man, blended identity, face swap, generic AI faces, altered facial features, changed face shape, changed eyes, changed nose, changed lips, changed jawline, distorted face, duplicated people, additional people, incorrect pose, wrong embrace, forehead kiss missing, kissing lips, woman looking at camera, woman's eyes open, exaggerated smile, aggressive expression, unnatural body positioning, distorted anatomy, extra arms, missing arms, extra hands, malformed hands, extra fingers, missing fingers, fused fingers, distorted neck, distorted shoulders, plastic skin, waxy skin, excessive skin smoothing, unrealistic skin texture, incorrect lighting, harsh flash, flat lighting, blown highlights, crushed shadows, color image, sepia, oversaturated tones, busy background, sharp distracting background, CGI, 3D render, illustration, anime, painting, excessive blur, low resolution, watermark, logo, text, AI artifacts.`
},
  {
  id: "037",
  title: "Silent Connection",
  image: "prompt-037.PNG",

  positive: `Without changing the appearance or facial features of the people from photos 1 and 2, use photo 3 as the reference for the pose, composition, framing, lighting, and overall emotional atmosphere.

A young man and woman are portrayed in a tender, emotionally intimate moment against a softly illuminated light-colored wall with a subtle, blurred marble pattern.

The woman stands slightly behind the man, leaning gently toward him. Her eyes are closed, and her expression conveys calmness, serenity, and quiet emotional closeness. Her long black hair falls naturally and freely down her back and over one shoulder, adding softness and fluidity to the composition. One of her arms is wrapped gently around the man's shoulder, resting naturally against his dark shirt. Her neatly manicured nails are painted a deep, dark shade, creating a subtle visual accent.

The man is wearing a dark, understated shirt without bright colors or reflective elements. The texture of the fabric is clearly visible under the soft, naturally diffused lighting, which creates delicate shadows and emphasizes the material's realistic structure and folds.

He stands upright with his head slightly raised and turned into a subtle profile. His gaze is directed upward and forward, beyond the frame, creating an atmosphere of contemplation, introspection, and quiet aspiration. His curly dark-brown hair is slightly tousled, giving him a natural, effortless appearance. His skin retains a realistic, natural tone, with smooth transitions between light and shadow emphasizing the structure of his face, jawline, and neck.

The composition is carefully balanced so that both figures blend harmoniously with the luminous background, creating a strong sense of intimacy, emotional connection, and silent support between them. Their body language feels natural and understated, conveying closeness without appearing overly posed.

The atmosphere is infused with subtle warmth and emotional depth while maintaining a restrained simplicity and authenticity. This quiet tension gives the scene a cinematic quality and strong visual depth, as though it were a still frame from an intimate contemporary film.

Photorealistic image, preserve the exact identities and recognizable facial features of the people from reference photos 1 and 2, photo 3 as the visual reference for pose and composition, natural anatomy and proportions, realistic skin texture, detailed curly hair and flowing hair strands, soft diffused natural lighting, delicate highlights and shadows, realistic dark fabric texture, subtle marble background, shallow depth of field, cinematic composition, intimate photography, highly detailed textures, premium image quality, ultra-realistic, 8K resolution.`,

  negative: `changed identity, different woman, different man, blended faces, face swap, generic AI faces, altered facial features, distorted face, incorrect facial proportions, additional people, duplicated people, wrong pose, woman standing in front of man, woman looking at camera, woman's eyes open, exaggerated smile, man looking at camera, man looking downward, incorrect head position, wrong embrace, missing arm around shoulder, short hair on woman, blonde hair, red hair, woman's hair tied up, straight short hair on man, blonde hair on man, incorrect curly hair, bright shirt, white shirt, reflective clothing, distorted anatomy, unnatural body proportions, extra arms, missing arms, extra hands, malformed hands, extra fingers, missing fingers, fused fingers, distorted shoulders, distorted neck, plastic skin, waxy skin, excessive skin smoothing, artificial skin texture, harsh flash, hard lighting, flat lighting, blown highlights, crushed shadows, dark background, busy background, sharp marble pattern, outdoor setting, CGI, 3D render, illustration, anime, painting, excessive blur, low resolution, watermark, logo, text, AI artifacts.`
},
  {
  id: "038",
  title: "Before the Kiss",
  image: "prompt-038.PNG",

  positive: `Without changing the appearance or facial features of the people from photos 1 and 2, use photo 3 as the reference for the pose, composition, framing, lighting, and overall emotional atmosphere.

In this quiet and intimate scene, a man and a woman stand face-to-face in profile, their faces almost touching as they pause in the tender moment just before a kiss.

The man has short, thick, curly dark hair and gently tilts his head downward toward the woman. His complexion is light and natural, while his expression remains calm, focused, and affectionate. He is wearing a dark brown corduroy jacket, its distinctive ribbed texture emphasized by soft folds around the shoulder and sleeves. A white shirt is subtly visible underneath, creating a gentle contrast with the deep brown tones of the jacket.

The woman, slightly shorter than the man, tilts her face upward toward him. Her eyes are closed and a soft, relaxed smile rests on her lips, conveying trust, tenderness, and peaceful anticipation. Her long platinum-blonde hair falls freely around her shoulders and is gently lifted by the breeze, with individual strands moving naturally and adding a subtle sense of motion to the otherwise still composition.

She is wearing a plaid blazer in warm brown, taupe, and gray tones, with the woven texture and check pattern of the fabric clearly visible. A white blouse can be seen underneath, softly complementing the muted, natural color palette of the scene.

The background consists of a softly blurred natural landscape beneath a subdued sky, rendered in delicate gray, beige, and muted earthy tones. The shallow depth of field completely separates the couple from their surroundings, reinforcing the feeling of privacy, tranquility, and emotional intimacy.

Soft, diffused daylight gently illuminates their faces and clothing, creating subtle shadows that define their facial features, profiles, and the textures of the fabrics without introducing harsh contrast. The light feels natural and atmospheric, giving the image depth and dimensionality while preserving the authenticity of the moment.

The composition captures the delicate tension of two people suspended just before a kiss—their closeness, warmth, and quiet emotional connection expressed through subtle body language rather than exaggerated gestures. Every detail feels spontaneous and believable, as though the photograph captured a genuine private moment rather than a deliberately posed scene.

Photorealistic image, preserve the exact identities and recognizable facial features of the people from reference photos 1 and 2, photo 3 as the visual reference for pose, composition, framing, and atmosphere, natural anatomy and proportions, realistic skin texture, detailed curly dark hair, realistic platinum-blonde hair moving gently in the wind, highly detailed corduroy and plaid fabric textures, soft overcast daylight, delicate natural shadows, muted earthy color palette, shallow depth of field, cinematic romantic photography, subtle film-like character, intimate aesthetic, ultra-realistic details, premium image quality, 8K resolution.`,

  negative: `changed identity, different woman, different man, blended faces, face swap, generic AI faces, altered facial features, distorted face, incorrect facial proportions, additional people, duplicated people, wrong pose, kissing already, lips touching, faces far apart, front-facing pose, both looking at camera, woman's eyes open, exaggerated smile, aggressive expression, incorrect height difference, man shorter than woman, wrong head position, short hair on woman, brunette woman, black hair on woman, red hair on woman, tied hair, ponytail, bun, incorrect platinum-blonde hair, straight hair on man, blonde hair on man, long hair on man, wrong clothing, black leather jacket, denim jacket, suit, wrong blazer, missing plaid pattern, missing corduroy texture, distorted anatomy, unnatural proportions, extra arms, missing arms, malformed hands, extra fingers, fused fingers, distorted neck, distorted shoulders, plastic skin, waxy skin, excessive smoothing, artificial hair, harsh sunlight, harsh flash, flat lighting, excessive contrast, oversaturated colors, busy background, sharp background, indoor setting, city background, CGI, 3D render, illustration, anime, painting, excessive blur, low resolution, watermark, logo, text, AI artifacts.`
},
  {
  id: "039",
  title: "Elevator Tension",
  image: "prompt-039.PNG",
  imagePosition: "center 30%",

  positive: `Without changing the appearance or facial features of the people from photos 1 and 2, use photo 3 as the reference for the pose, composition, framing, lighting, and overall emotional atmosphere.

Inside a narrow space resembling a modern elevator with metallic walls, two people stand extremely close to one another, creating an almost tangible atmosphere of emotional intimacy and quiet tension.

The man leans slightly toward the woman, his head almost touching her face. He looks at her with a subtle, thoughtful expression, while his body is naturally turned toward her. One hand rests casually inside the pocket of his trousers, while the other is partially concealed by the surrounding shadows. He is dressed in a light-colored tailored suit jacket with matching trousers and a crisp white shirt. The fabric has a soft, matte texture, and the gently diffused lighting subtly emphasizes the clean lines of his silhouette, creating a delicate contrast against the cool metallic surfaces of the elevator.

The woman stands upright beside him, her hands tucked naturally into the pockets of a long, double-breasted dark brown coat with a subtle, refined fabric texture. The collar of the coat is slightly raised, framing her neck and face. Beneath it, a light-colored blouse with a deep neckline is visible, giving her appearance an effortless sense of elegance and sophistication.

Her face is gently turned toward the man, her eyes closed, creating a feeling of calmness, trust, and complete immersion in the moment. Their proximity and restrained body language communicate intimacy without exaggerated gestures, making the interaction feel natural, private, and emotionally charged.

Soft overhead lighting gently wraps around both figures, producing delicate highlights and subtle reflections across the metallic wall behind them. These muted reflections enhance the feeling of isolation and privacy within the confined space. The shadows are deep yet smooth and controlled, carefully defining the contours of their bodies, faces, and clothing while adding cinematic depth and a subtle sense of mystery.

The composition is strict, minimalist, and visually balanced. The cold, understated metallic elevator interior serves as a contrasting backdrop to the warmth and emotional tension between the couple. This contrast creates a uniquely restrained yet tender atmosphere, resembling a frozen frame from an intimate cinematic drama—a fleeting moment in which time seems to slow down between two people deeply connected to one another.

Photorealistic image, preserve the exact identities and recognizable facial features of the people from reference photos 1 and 2, photo 3 as the visual reference for pose, composition, framing, and atmosphere, natural anatomy and proportions, realistic skin texture, highly detailed matte suit and coat fabrics, brushed-metal elevator surfaces, subtle realistic reflections, soft overhead cinematic lighting, deep controlled shadows, muted neutral color palette, intimate photography, shallow cinematic depth, sophisticated film-still aesthetic, subtle emotional tension, premium image quality, ultra-detailed textures, 8K resolution.`,

  negative: `changed identity, different woman, different man, blended faces, face swap, generic AI faces, altered facial features, distorted face, incorrect facial proportions, additional people, duplicated people, wrong pose, couple standing far apart, kissing, exaggerated embrace, woman looking at camera, woman's eyes open, man looking at camera, exaggerated expressions, aggressive expression, incorrect body positioning, wrong clothing, dark suit on man, casual clothing on man, T-shirt, jeans, wrong coat on woman, short coat, light brown coat, missing double-breasted coat, missing coat pockets, hands outside pockets, missing white shirt, missing blouse, distorted anatomy, unnatural proportions, extra arms, missing arms, malformed hands, extra fingers, missing fingers, fused fingers, distorted neck, distorted shoulders, plastic skin, waxy skin, excessive skin smoothing, incorrect metallic reflections, mirror-like elevator walls, excessive reflections, harsh flash, flat lighting, blown highlights, crushed shadows, bright colorful lighting, neon lighting, warm wooden elevator, outdoor setting, busy background, CGI, 3D render, illustration, anime, painting, excessive blur, low resolution, watermark, logo, text, AI artifacts.`
},
  {
  id: "040",
  title: "Almost a Kiss",
  image: "prompt-040.PNG",

  positive: `Without changing the appearance or facial features of the people from photos 1 and 2, use photo 3 as the reference for the pose, composition, framing, lighting, and overall emotional atmosphere.

A young couple is portrayed in an intimate and tender moment shaped by soft, cool-toned lighting, with particular emphasis on their faces, hands, and subtle physical interaction.

The man, with dark, slightly wavy hair, leans closely toward the woman, his lips almost touching hers. His eyes are closed, conveying a sense of complete immersion, trust, and emotional closeness. He is wearing a black V-neck shirt made from matte fabric that fits closely to his body, subtly emphasizing the definition of his neck, shoulders, and chest.

The woman has long, flowing silver-white hair and gently tilts her head backward, allowing the man to move closer. Her eyes are closed, and her expression conveys serenity, trust, and quiet devotion. She is dressed in a dark, fitted high-neck sweater made from thin, smooth fabric that follows the elegant lines of her silhouette.

The man holds the back and side of her neck firmly yet delicately with one hand, his fingers naturally intertwined with strands of her silver-white hair. His other hand gently supports her wrist, while the woman holds his hand against her upper chest, reinforcing the sense of emotional connection and tenderness between them.

The background is completely black, eliminating all visual distractions and intensifying the dramatic atmosphere. The darkness creates a striking contrast between illuminated skin, silver-white hair, and the couple's dark clothing, giving the scene a profound sense of intimacy and emotional depth.

Soft, cool directional light falls from the side, revealing realistic skin texture and delicately sculpting the contours of their faces, lips, hands, fingers, and necks. Smooth transitions between highlights and deep shadows create cinematic dimensionality while preserving the softness and intimacy of the moment.

The composition is tight and closely framed, concentrating entirely on the interaction between the two figures—the near-kiss, closed eyes, intertwined hands, subtle gestures, and emotional expressions. The result conveys restrained sensuality, tenderness, trust, and lyrical romantic tension, resembling a carefully composed still from an intimate cinematic drama.

Photorealistic image, preserve the exact identities and recognizable facial features of the people from reference photos 1 and 2, photo 3 as the visual reference for pose, composition, framing, lighting, and atmosphere, natural anatomy and proportions, realistic skin texture, highly detailed hands and fingers, realistic silver-white hair strands, matte black fabrics, cool cinematic side lighting, deep controlled shadows, pure black background, dramatic chiaroscuro, intimate close-up composition, shallow depth of field, sophisticated photography, cinematic film-still aesthetic, ultra-detailed textures, premium image quality, 8K resolution.`,

  negative: `changed identity, different woman, different man, blended faces, face swap, generic AI faces, altered facial features, distorted face, incorrect facial proportions, additional people, duplicated people, wrong pose, lips touching, full kiss, faces far apart, both looking at camera, man's eyes open, woman's eyes open, exaggerated smile, aggressive expression, exaggerated sexual pose, incorrect hand placement, missing hand on neck, choking gesture, hand covering face, missing wrist support, hands not interacting, short hair on woman, blonde hair, brunette hair, black hair on woman, yellow hair, incorrect silver-white hair, straight hair on man, blonde hair on man, wrong clothing, white clothing, colorful clothing, missing V-neck shirt, missing high-neck sweater, distorted anatomy, extra arms, missing arms, extra hands, malformed hands, extra fingers, missing fingers, fused fingers, broken wrists, distorted neck, distorted shoulders, plastic skin, waxy skin, excessive smoothing, artificial hair, bright background, gray background, visible environment, warm orange lighting, harsh flash, flat lighting, blown highlights, crushed facial detail, excessive HDR, CGI, 3D render, illustration, anime, painting, excessive blur, low resolution, watermark, logo, text, AI artifacts.`
},
  {
  id: "041",
  title: "Ivory Garden",
  image: "prompt-041.png",
  imagePosition: "center 25%",

  positive: `Ultra-realistic luxury romantic couture portrait of a beautiful young adult woman, 23–27 years old, outdoors in an elegant lush garden with soft greenery and delicate pale flowers. Recreate the pose, framing, white couture styling, flower at the lips, pearl jewelry, soft garden setting and dreamy atmosphere.

IDENTITY IS THE HIGHEST PRIORITY: preserve her exact recognizable facial structure, proportions, eyes, eyebrows, nose, lips, cheekbones, jawline, chin, natural body proportions and complexion. Never copy, blend or redesign another woman's identity.

She has light blonde hair styled in a soft romantic updo with natural volume, loose face-framing strands, baby hairs and flyaways. Hair remains clearly blonde with creamy/beige-blonde variation.

Her eyes are rich deep brown, with realistic dark chocolate irises and natural catchlights. Face, neck, shoulders, décolletage and body must have one seamless natural skin tone. Preserve realistic pores, peach fuzz and subtle skin imperfections.

Sophisticated romantic makeup: defined brown eyes, winged eyeliner, separated lashes, natural brows, soft blush, subtle contour and muted rose-nude glossy lips.

POSE: she leans subtly toward the camera, shoulders gently angled, head slightly tilted, looking confidently into the lens. A small fresh white flower rests delicately between her lips, slightly toward one side, without hiding her face.

OUTFIT: luxurious ivory-white corset ensemble with satin, delicate lace, subtle semi-sheer mesh, visible corset structure and enormous airy translucent organza/chiffon puff sleeves. Flowing sheer ivory fabric creates romantic volume around the body. Preserve her natural anatomy without enlarged breasts, tiny waist or exaggerated curves.

Add a refined multi-strand cream pearl choker with a small jeweled clasp, delicate pearl earrings and subtle fine gold jewelry. Realistic pearl, metal, lace and translucent fabric textures.

BACKGROUND: elegant secluded garden with mature trees, lush green foliage and clusters of small white blossoms, softly transitioning into natural creamy bokeh.

LIGHTING: soft diffused natural daylight, flattering and dimensional, preserving skin texture and full detail in white fabrics. Gentle highlights on face, pearls and translucent sleeves with natural soft shadows.

CAMERA: framed approximately from upper thighs/hips upward, 70–85mm portrait lens, sharp focus on face and eyes, shallow natural depth of field.

Ultra-photorealistic luxury couture photography, exact identity, light blonde updo, deep brown eyes, seamless complexion, natural proportions, white flower at lips, ivory corset, huge translucent sleeves, pearl jewelry, romantic garden, realistic skin/fabric/botanical microtexture, premium 8K photography.`,

  negative: `wrong identity, blended face, generic AI model, altered facial structure, changed nose, enlarged lips, doll face, face-swap artifacts, dark/brunette/black/red/short hair, wig, plastic hair, blue/green/gray/hazel/light eyes, wrong eye color, face-body skin mismatch, orange skin, fake tan, plastic/waxy/poreless skin, excessive smoothing, changed body proportions, enlarged breasts, tiny waist, exaggerated hips, bad anatomy, extra limbs, malformed hands, extra/fused fingers, missing flower, oversized/plastic flower, flower covering face, wrong outfit, black/colorful clothing, missing corset, missing puff sleeves, malformed lace/mesh, exposed nipples, excessive transparency, missing pearls, oversized/floating jewelry, indoor/studio/city/beach background, fake garden, harsh flash, neon lighting, blown whites, fisheye, distorted face/body, cropped head, CGI, 3D render, anime, illustration, blur, low resolution, AI artifacts, watermark, logo, text.`
},
  {
  id: "042",
  title: "Silver Tide",
  image: "prompt-042.png",
  imagePosition: "center 20%",

  positive: `Ultra-realistic cinematic luxury fashion photograph of a glamorous young adult woman, approximately 23–27 years old, kneeling gracefully in shallow ocean surf during a soft pastel sunset. Recreate the reference's kneeling pose, body orientation, flowing smoky silver-gray gown, dramatic long train, breaking waves, camera perspective and romantic cinematic mood, while preserving the target woman's exact established facial identity, natural appearance and authentic body proportions.

IDENTITY PRESERVATION IS THE HIGHEST PRIORITY. Preserve her exact recognizable face: face shape, forehead, cheekbones, natural cheek volume, eyes, eyebrows, nose, lips, jawline, chin and subtle natural asymmetry. Do not blend with or copy the reference model's identity.

Her eyes remain deep dark espresso-brown. Her hair remains naturally long and light blonde, wet from seawater and falling in soft separated strands around the shoulders and upper back. Include realistic creamy/champagne-blonde variation, slightly darker wet roots, individual strands and subtle movement from the coastal breeze. Never copy dark hair from the reference.

Preserve her authentic shoulder width, bust, ribcage, waist, hips, thighs, arms and overall silhouette. No enlarged bust, tiny waist, exaggerated hips or altered anatomy.

Maintain one seamless natural complexion across the face, neck, shoulders, décolletage, arms, hands and visible legs. Render realistic wet skin with pores, peach fuzz, tiny seawater droplets, natural imperfections and physically accurate highlights.

POSE & EXPRESSION

She kneels in very shallow water near the shoreline, lower legs folded naturally beneath/beside her. Her torso rises elegantly upright with a subtle natural arch.

Her head tilts gently backward, chin slightly elevated, eyes softly closed and lips relaxed. Expression: serene, sensual, free and emotionally immersed in the ocean.

Both arms descend naturally beside her body, hands resting close to the thighs and wet gown. Perfect anatomical shoulders, elbows, wrists, hands and fingers.

GOWN

She wears an extraordinary floor-length smoky silver-gray couture gown with a deep elegant V neckline, delicate narrow straps, fitted bodice and enormous flowing skirt with an extended train.

Fabric: layered translucent chiffon, silk organza and fluid semi-sheer material in smoky silver, cool taupe-gray, muted blue-gray and subtle pearlescent champagne.

The enormous train spreads diagonally toward the lower-left foreground, partly floating in shallow water and partly resting on reflective wet sand.

Render realistic wet/dry fabric behavior: translucent layers, fine weave, seams, wrinkles, water-darkened areas, wet fabric clinging naturally around parts of the legs and hips, flowing folds and physically believable weight. Elegant coverage, no unintended nudity.

OCEAN & SUNSET

A small wave breaks naturally around her knees and gown with realistic white foam, translucent blue-gray/green water, droplets and fine spray.

Behind her, dramatic layered ocean waves roll toward shore, including a larger breaking wave behind her body. Preserve realistic wave translucency, irregular foam, bubbles, currents and reflections.

The sunset remains subtle and photographic: peach, dusty rose, pale coral and soft gold near the horizon. No fantasy sky.

Lighting combines warm sunset illumination with cool reflected ocean light. Add delicate warm highlights around wet blonde hair, face, shoulders and gown edges while maintaining realistic shadow detail.

Color palette: steel-blue ocean, smoky silver gown, natural warm skin and restrained peach-pink sunset.

CAMERA & COMPOSITION

Woman centered in the lower-middle frame with substantial ocean and waves surrounding and behind her. Keep the entire important gown train visible.

Camera positioned relatively low at approximately kneeling-torso height, several meters away. Use approximately 70–85mm full-frame equivalent perspective with natural compression and moderate depth of field.

The woman, nearest gown folds, water and immediate wave remain highly detailed; distant waves and horizon soften naturally.

Final aesthetic: international luxury fragrance campaign / couture fashion photography photographed on a real ocean shoreline — romantic, powerful, elegant and completely photographic.

Ultra-photorealistic, exact facial identity, natural body proportions, long wet light-blonde hair, deep dark-brown eyes, seamless complexion, smoky silver-gray couture gown, dramatic wet train, kneeling in ocean surf, breaking waves, pastel sunset, realistic seawater and wet skin, cinematic natural lighting, premium photography, 8K detail.`,

  negative: `different identity, reference-model face, blended face, generic influencer, altered facial structure, enlarged lips, doll face, face-swap artifacts, dark/brunette/red/short hair, excessively long hair, synthetic wig, blue/green/gray/hazel/light eyes, wrong eye color, changed body proportions, enlarged breasts, tiny waist, exaggerated hips, stretched limbs, distorted anatomy, face/body skin mismatch, orange skin, fake tan, plastic skin, wax skin, poreless skin, excessive smoothing, extra limbs, malformed hands, extra/missing/fused fingers, broken wrists, distorted knees, impossible kneeling pose, extreme back arch, wrong pose, standing, lying, floating, wrong head position, stiff posture, wrong dress color, black/white/red/blue/gold dress, short dress, latex dress, missing train, short train, excessive transparency, nudity, plastic fabric, rigid chiffon, floating fabric, duplicated train, fabric fused with body, pool, lake, tropical lagoon, flat sea, missing waves, CGI water, duplicated waves, artificial foam, frozen splash, water passing through body, excessive splash covering face, storm, lightning, fantasy sky, giant moon, neon sunset, exaggerated orange/purple sky, harsh flash, studio lighting, neon lighting, excessive HDR, blown highlights, crushed shadows, excessive teal-orange grading, fisheye, extreme wide angle, distorted body, giant head/hands, cropped head, cropped train, CGI, 3D render, illustration, anime, fantasy art, obvious AI appearance, blurry face, low-detail skin/fabric/ocean, pixelation, oversharpening, watermark, logo, text.`
},
  {
  id: "043",
  title: "Blush Roses",
  image: "prompt-043.png",

  positive: `Ultra-realistic luxury lifestyle mirror selfie of a glamorous young adult woman, approximately 23–27 years old, standing in an elegant contemporary apartment while holding an enormous bouquet of pale blush-pink roses. Recreate the mirror-selfie composition, standing pose, smartphone placement, oversized rounded gold-framed mirror, huge rose bouquet, pink floral corset, neutral luxury interior and soft natural daylight.

IDENTITY IS THE HIGHEST PRIORITY. Preserve her exact recognizable facial identity, natural facial geometry, eye shape, eyebrows, nose, lips, cheekbones, jawline, chin, subtle asymmetry, complexion and authentic body proportions. Never blend, average or replace her identity.

Her eyes remain deep dark espresso-brown with realistic iris detail and window-light catchlights. Her gaze is naturally directed toward the smartphone screen.

Her hair remains long and light blonde, styled into an elegant sleek low bun / gathered updo, with realistic blonde roots, baby hairs, subtle face-framing strands and flyaways. Never inherit dark hair.

Preserve one seamless natural complexion across the face, neck, shoulders, décolletage, arms and hands, with realistic pores, peach fuzz and subtle imperfections. No face/body color mismatch or plastic retouching.

Maintain her natural body proportions: authentic shoulders, bust, ribcage, waist, hips, torso and arms. No enlarged bust, tiny waist or exaggerated hourglass figure.

POSE: standing in front of the mirror with a subtle three-quarter torso rotation. One arm holds a modern smartphone vertically around eye level; the other supports the enormous bouquet. Hands and fingers must be anatomically correct.

She wears a romantic strapless blush-pink couture corset with structured boning, subtle semi-sheer mesh and dimensional chiffon/organza floral appliqués. Realistic fabric pressure, stitching and layered petals. Add small elegant pearl earrings and nude/blush almond-shaped manicure.

The bouquet is extremely large, luxurious and rounded, containing dozens of individually detailed garden roses in powder pink, blush, dusty rose and creamy pink. Realistic layered petals, natural irregularity and no cloned flower patterns. Wrap it in sculptural layers of translucent frosted white and pale-blush florist paper.

COMPOSITION: photographed entirely through a large elegant rounded/arched mirror with a thin brushed-gold frame. Woman positioned upper-center/right; enormous bouquet dominates the lower-left/center without covering her face.

INTERIOR: sophisticated minimalist apartment with warm off-white/greige walls, subtle paneling, cream sofa, understated décor and a delicate dried-branch arrangement. Clean, elegant and believable.

LIGHTING: soft directional natural window daylight with slightly moody interior exposure. Gentle illumination across face, shoulders, pink corset and roses, with realistic shadows beneath the jaw and between flower petals. No flash or aggressive HDR.

Mirror reflection and perspective must be physically coherent. Smartphone proportions, camera module and grip must look real.

Premium 35–50mm smartphone/full-frame-equivalent perspective, moderate depth of field, authentic smartphone photography and realistic optics.

Ultra-photorealistic luxury Instagram mirror selfie, exact identity, long light-blonde hair in low updo, deep dark-brown eyes, seamless complexion, natural proportions, enormous blush-pink rose bouquet, dimensional pink floral corset, gold rounded mirror, elegant neutral apartment, soft daylight, realistic skin, flowers, fabric and reflections, 8K-level detail.`,

  negative: `wrong identity, reference-model face, blended face, generic influencer, altered facial structure, changed nose, enlarged lips, doll face, face-swap artifacts, dark/brunette/red/short hair, wig, blue/green/gray/hazel/light eyes, wrong eye color, face-body skin mismatch, orange skin, fake tan, plastic/waxy/poreless skin, excessive smoothing, changed body proportions, enlarged breasts, tiny waist, exaggerated hips, elongated arms, bad anatomy, extra arms, malformed hands, extra/missing/fused fingers, broken wrists, distorted phone grip, duplicated phone, duplicated woman, incorrect mirror reflection, warped mirror, wrong pose, sitting, kneeling, stiff pose, missing bouquet, tiny/sparse bouquet, bouquet covering face, red/yellow/dark roses, plastic flowers, cloned roses, repeated petals, malformed flowers, floating bouquet, wrong outfit, dress, casual clothing, missing corset, flat printed flowers, malformed corset, excessive transparency, clothing fused with skin, harsh flash, neon lighting, excessive pink filter, blown highlights, crushed shadows, excessive HDR, fisheye, giant phone, giant hand, distorted body, warped architecture, cluttered interior, outdoor setting, background people, CGI, 3D render, anime, illustration, obvious AI appearance, blurry face, blurry eyes, low-detail flowers, pixelation, oversharpening, watermark, logo, text.`
},
  {
  id: "044",
  title: "Bloody Candy Doll",
  image: "prompt-044.png",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her real facial features, head shape, facial oval, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter her appearance or idealize her face. The woman must remain maximally recognizable even under Halloween makeup.

Create an ultra-realistic Halloween beauty fashion photograph of an adult woman styled as a glamorous bloody doll with candy hearts, in a pastel horror aesthetic. Vertical 9:16 format, close-up portrait, professional beauty photography, with the composition as close to the reference as possible.

POSE AND COMPOSITION

The woman is positioned facing forward, with her head slightly tilted and her gaze directed straight into the camera. Her lips are slightly parted, and her facial expression is mysterious, flirtatious, and slightly frightening.

One hand is raised toward her face, holding a large decorative candy heart on a thin stick near one eye. The heart partially covers the bloody makeup around that eye. Her fingers are elegantly curved, her hand is naturally sized, and it does not cover her lips.

The frame includes her head, hair, bare shoulders, collarbones, and upper chest.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the woman's real facial and body proportions. Her head must be a normal size relative to her shoulders, her neck must have a natural length, and her shoulders must be delicate and feminine.

Her bust is full, size 4, anatomically natural and harmoniously proportionate to her rib cage. Do not enlarge the bust beyond the specified proportions or distort the shoulders or décolletage.

Her arm and hand must have natural lengths, with correctly shaped fingers and no perspective-related enlargement. Do not create extra fingers or deformed joints.

HAIR AND HAIRSTYLE

The hair must retain its original color, be long and thick, and be styled in a very voluminous high hairstyle with a half-up ponytail at the crown.

The upper section of the hair is lifted and secured with a small bright pink satin hair tie. The remaining hair is worn loose, with voluminous small waves and a slightly tousled texture.

For the Halloween look, individual strands are temporarily colored lavender, lilac, and rich purple, but the main original hair color remains recognizable. The hair frames her face and falls over her shoulders.

MAKEUP — BLOODY CANDY DOLL

Luxurious glamorous makeup in pink and purple tones. The skin retains its natural tone and visible texture, with soft contouring, pink blush, and luminous highlighter.

The eyebrows are thick and expressive, retaining their original shape. The eyelids feature intense lilac, purple, and pink eyeshadows with smooth blending. Long black winged eyeliner and thick false eyelashes. The eyes retain their original shape and color.

The lips are full, with matte soft pink lipstick, and slightly parted. Do not change the natural shape of the lips.

BLOODY HALLOWEEN MAKEUP

Around one eye, create a realistic, three-dimensional special effect resembling a large, irregular dark-red artificial wound with torn edges, theatrical blood, and textured latex makeup. Part of the effect is concealed by the candy heart.

On the opposite cheek, create a decorative heart-shaped wound with uneven dark burgundy edges. Inside the heart is a light pink surface with the red inscription "KISS ME".

On the upper chest, place two large decorative hearts that appear to be embedded into the skin using professional SFX makeup.

The first heart is positioned in the center of the upper chest. It has a turquoise surface with the inscription "SELF LOVE" and realistic dark-red bloody edges.

The second heart is located near the collarbone on the opposite side. It has a lilac surface with the inscription "BE KIND" and similar raised, bloody edges.

Around the hearts are small splashes of artificial blood, textured latex, and dark burgundy shading. All injuries are strictly theatrical, with no real wounds.

ACCESSORIES AND MANICURE

In her hand, the woman holds a large decorative heart on a stick, resembling a vintage Valentine's Day candy. The heart is light cream-colored with a red border and the inscription "DO U BOO".

Her nails are very long, with a pointed almond shape and a glossy soft pink finish. She wears a small silver ring with a transparent gemstone on one finger.

CLOTHING

Her shoulders and collarbones are exposed. She is wearing a nude-colored strapless top, completely concealed below the lower edge of the frame, creating the effect of an exposed décolletage to showcase the artistic makeup.

Only her shoulders, collarbones, and upper chest are visible in the frame. No additional jewelry that would cover the decorative hearts.

BACKGROUND AND LIGHTING

A clean, light-gray studio background without decorations. Soft, bright frontal beauty lighting evenly illuminates her face, hair, shoulders, and makeup.

Natural color grading with rich pastel pink, lilac, turquoise, and dark-red accents. The skin looks realistic, without excessive smoothing.

No red lighting, neon, smoke, dark interiors, or additional Halloween decorations.

CAMERA AND FRAMING

Vertical 9:16 format, close-up beauty portrait framed from the top of the hairstyle to a line slightly below the decorative hearts on the chest. The camera is positioned at face level, with an 85mm lens and natural portrait perspective.

The face occupies the central part of the frame, while the voluminous hair fills the upper and side portions. The raised hand holding the candy heart is positioned on the left, and the decorative hearts on the chest are fully visible.

Do not crop the top of the hairstyle, the hand, the candy heart, or any makeup elements. Do not stretch the figure to fit the format.

Professional Halloween beauty photography, natural skin texture, detailed three-dimensional SFX makeup, realistic hair, vibrant pastel shades, maximum photorealism, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, natural anatomy, voluminous high hairstyle with a pink hair tie, luxurious lilac-pink makeup, bloody special effect around one eye, "DO U BOO" candy heart near the face, decorative hearts reading "KISS ME", "SELF LOVE", and "BE KIND" with realistic bloody edges, long pink manicure, light studio background, and composition strictly matching the reference.`,

  negative: `wrong identity, altered facial features, changed eye color, changed main hair color, unrecognizable face, idealized face, enlarged head, oversized shoulders, exaggerated breasts, enlarged arms or hands, distorted neck, deformed collarbones, distorted rib cage, unnatural body proportions, extra fingers, missing fingers, fused fingers, malformed joints, deformed hands, cropped hairstyle, cropped candy heart, cropped makeup, missing candy heart, incorrect candy heart text, missing decorative hearts, incorrect inscriptions, missing pink hair tie, flat hairstyle, short hair, plastic-looking skin, excessive smoothing, real tattoos, glasses, extra jewelry covering hearts, real injuries, cartoon stylization, anime, illustration, CGI, 3D render, red lighting, neon, smoke, dark interior, Halloween background decorations, incorrect aspect ratio, stretched figure, blur, low resolution, logos, watermarks, AI artifacts.`
},
  
{
  id: "045",
  title: "Scooby-Doo Glam",
  image: "prompt-045.png",

  positive: `Use the uploaded photograph of the adult woman as the only source of her appearance. Preserve her face, eye shape, nose, lips, cheekbones, facial oval, age, skin tone, eye color, and hair color with maximum accuracy. Do not alter or idealize her appearance. The woman must remain fully recognizable.

Create an ultra-realistic Halloween beauty fashion photograph featuring a glamorous Scooby-Doo Girl (Scooby-Doo Glam) look. Vertical 9:16 format, close-up portrait, professional photography, 8K quality.

POSE

The woman is positioned close to the camera, with her torso slightly turned and her head gently tilted at a three-quarter angle. Her gaze is directed straight into the lens, her lips are closed, and her expression is confident and seductive. Natural body proportions, a full size 4 bust without artificial enlargement.

EARS

On her head is a large headband featuring two voluminous, soft dog ears, exactly like Scooby-Doo's ears. The ears are wide, long, chocolate brown with large dark spots, and pinkish-beige on the inside.

Both ears are bent and hang down to the sides: one is slightly raised at the base and curves outward, while the other hangs freely to the side. Soft plush texture, rounded tips, and natural asymmetry.

No upright, pointed, or deer-like ears.

HAIR

Long, thick hair in its original color, worn loose in large, soft waves, with volume at the roots and an almost center parting. Decorative chocolate-brown spots appear on individual strands.

MAKEUP

Luxurious doll-like Halloween glam makeup. Naturally glowing skin, defined cheekbones, and peach blush.

Long, thick black eyelashes, precise winged eyeliner, beige-brown eyeshadow with bright turquoise accents at the outer corners of the eyes.

Thin turquoise lines beneath the eyes and painted lower eyelashes.

A small brown dog nose painted on the tip of her nose, with neat dark freckles and little spots on her cheeks.

Her lips retain their natural shape, appearing full and glossy in a nude-pink shade with brown lip liner.

COSTUME

A fitted chocolate-brown bodysuit made from soft, velvety fabric with large dark spots.

A sculpted, deep neckline emphasizes her natural bust without altering her anatomy.

Around her neck is a wide turquoise collar with silver hardware and a diamond-shaped turquoise-and-gold pendant featuring the letters "SD".

BACKGROUND

A bright, modern home interior with white walls, an open door, and softly blurred furniture.

Soft daylight and warm, natural color grading.

CAMERA

Vertical 9:16 portrait, camera positioned at face level, 50–85mm lens.

Both floppy ears, her face, long hair, collar, and décolletage must be fully visible within the frame.

Maximum detail in skin, hair, makeup, and fabric textures. Realistic photography without cartoon stylization.

MAIN PRIORITY: Complete recognizability of the woman from the original photograph, large soft floppy Scooby-Doo ears, long blonde hair, expressive turquoise-and-black makeup, a brown spotted costume, and the signature turquoise collar.`,

  negative: `wrong identity, altered facial features, idealized face, generic AI woman, face swap, blended face, changed eye shape, changed nose, enlarged lips, enlarged eyes, oversized head, wrong eye color, changed original hair color, short hair, thin hair, unnatural wig, exaggerated breasts, artificial bust enlargement, distorted anatomy, unnatural body proportions, extra arms, extra limbs, extra fingers, fused fingers, malformed hands, upright ears, pointed ears, deer ears, horns, missing dog ears, asymmetrical malformed ears, animal muzzle, realistic animal face, distorted dog nose, oversized painted nose, incorrect makeup, missing turquoise accents, missing collar, wrong collar color, missing SD pendant, incorrect costume, missing brown spots, plastic skin, waxy skin, excessive smoothing, artificial lighting, dark background, cartoon, anime, illustration, CGI, 3D render, blurry face, low resolution, cropped ears, cropped head, cropped collar, incorrect aspect ratio, watermark, logo, unwanted text, AI artifacts.`
},
  
{
  id: "046",
  title: "Cursed Snow White",
  image: "prompt-046.PNG",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her real facial features, head shape, eyes, eyebrows, nose, lips, cheekbones, chin, age, natural asymmetry, skin tone, original eye color, and hair color. Do not alter her appearance or idealize her face. The woman must remain maximally recognizable even under Halloween makeup.

Create an ultra-realistic cinematic Halloween beauty collage featuring the woman as Cursed Snow White, combining classic fairytale beauty with a terrifying zombie transformation. Three horizontal frames separated by thin black diagonal lines, with the composition strictly matching the reference.

COMPOSITION AND POSES

The collage consists of three horizontal photographs of the same woman. In all three frames, her head is tilted to the side, her face is captured in a close-up three-quarter angle, and her shoulders and upper chest are visible. The composition is slightly rotated diagonally.

Top frame — Cursed Snow White with terrifying zombie makeup. Her head is strongly tilted to the left relative to the frame, and her gaze is directed into the camera. One hand holds a small red apple near her face, with a large bitten section exposing the pale flesh. Her facial expression is frightening and mysterious.

Middle frame — Beautiful Snow White before the transformation. The woman tilts her head in the same direction, looks directly into the camera, and keeps her lips slightly parted. One hand elegantly holds a whole red apple near her temple. Her expression is gentle, seductive, and slightly anxious.

Bottom frame — Another depiction of Cursed Snow White. Her head is tilted, one eye is rolled upward and appears milky white, while the other looks directly into the camera. She holds the bitten apple near her chest, with her mouth slightly open.

ANATOMY AND PROPORTIONS

In all three frames, the facial features and proportions must remain strictly identical. The head must be naturally sized, the neck must have anatomically correct length, and the shoulders must be delicate and feminine. The bust is full and harmoniously proportionate to her figure, without artificial enlargement or distortion of the décolletage.

The arms and hands must be naturally sized, with long, anatomically correct fingers gently holding the apple. The head tilt must be achieved through a natural rotation of the head and torso, without unnaturally twisting the neck.

HAIR AND HAIRSTYLE

The hair must strictly retain its original color and be styled in a luxurious vintage Snow White hairstyle: a deep side part, smooth voluminous Old Hollywood waves, and large, neatly defined curls framing the face and falling around shoulder level.

A small, bright red satin bow is placed on one side of her head. The hairstyle and hair color must be identical in all three frames. Do not dye the hair black.

MAKEUP — BEAUTIFUL SNOW WHITE

In the middle frame, the skin retains its original natural tone, appearing smooth while maintaining visible natural texture. Expressive eyebrows, soft brown eyeshadow, elongated black winged eyeliner, thick eyelashes, and subtle blush.

The lips are a rich scarlet red with a velvety matte finish and a precisely defined outline. The eyes retain their original shape and color. The makeup is elegant and feminine, inspired by the aesthetic of a vintage fairytale heroine.

MAKEUP — CURSED SNOW WHITE

In the top and bottom frames, apply professional, realistic zombie SFX makeup.

The skin is pale with a cool grayish-blue undertone. Across the forehead, temples, around the eyes, and on the cheeks, a delicate branching network of dark purple and black veins appears, as though the poison from the enchanted apple is spreading beneath the skin.

Deep gray-purple shadows surround the eyes, creating a sickly, mystical effect. One eye has a milky-white decorative contact lens, while the other retains its original color. The lips are covered in rich dark-red lipstick, slightly smudged at the corners of the mouth.

Small darkened areas on the skin imitate a supernatural fairytale curse, without open wounds or excessive blood. The makeup must not alter the woman's real facial structure.

CLOTHING AND ACCESSORIES

In all three frames, the woman wears the same cream-white dress with a deep rounded neckline, exposed shoulders, and soft, lowered sleeves made from textured fabric.

The upper part of the dress fits closely to her figure, emphasizing the natural contours of her bust and shoulders. The fabric is soft and slightly crinkled, with realistic folds.

Her nails are long, almond-shaped, and coated in a delicate nude shade. No oversized jewelry.

APPLE

A natural red apple with glossy skin and subtle golden undertones. In the middle frame, the apple is whole; in the top and bottom frames, it is bitten, with clearly visible light cream-colored flesh.

The apple must be realistically sized and correctly positioned between her fingers, without any distortion of its shape.

BACKGROUND AND LIGHTING

The top and bottom frames feature a muted golden-olive background resembling antique fabric. The lighting is soft and warm, with cool shadows across the face, creating an eerie fairytale atmosphere.

The middle frame is photographed against a light vintage wall with decorative moldings. Soft neutral lighting beautifully emphasizes the woman's face, red lips, and hair texture.

Vintage color grading with subtle grain and natural shadows. No bright red lighting, neon, or artificial glow.

CAMERA AND COMPOSITION

A cinematic collage divided into three horizontal strips of approximately equal height. The top and bottom photographs are slightly darker, while the central photograph is brighter.

Close-up beauty portrait, 50–85mm lens, natural perspective. In all three frames, the face, hair, shoulders, décolletage, hand, and apple must be visible. Do not crop the eyes, lips, or important makeup details.

Maximum photorealism, natural skin texture, detailed Halloween makeup, realistic hair, professional cinematic post-processing, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, three horizontal frames featuring the same Snow White, an identical vintage hairstyle with a red bow, preservation of the original hair color, a cream-colored dress, a red apple, Beautiful Snow White in the center, and two frightening versions with dark veins and a white eye in the top and bottom frames. The composition must strictly match the reference.`,

  negative: `wrong identity, altered facial features, different woman, generic AI face, face swap, blended face, idealized face, changed head shape, changed nose, changed lips, enlarged eyes, changed natural eye color except decorative zombie contact lens, changed original hair color, black dyed hair, short hair, inconsistent hairstyle between frames, missing red satin bow, oversized head, enlarged breasts, exaggerated shoulders, distorted décolletage, unnatural neck rotation, deformed neck, incorrect anatomy, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed joints, distorted apple, oversized apple, missing apple, incorrect apple color, whole apple in zombie frames, bitten apple in middle frame, missing white zombie eye, both eyes white, missing dark veins, excessive gore, open wounds, excessive blood, inconsistent identity across frames, different women in each frame, duplicated faces within a frame, incorrect dress, dark dress, missing sleeves, incorrect background, neon lighting, red lighting, artificial glow, plastic-looking skin, waxy skin, excessive smoothing, cartoon, anime, illustration, CGI, 3D render, blurry face, low resolution, incorrect collage layout, missing frame, extra frame, cropped eyes, cropped lips, cropped important makeup details, tattoos, glasses, inscriptions, logos, watermarks, AI artifacts.`
},

{
  id: "047",
  title: "Toxic Vampire",
  image: "prompt-047.PNG",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her real facial features, head shape, facial oval, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, and original eye and hair color. Do not alter her appearance or idealize her face. The woman must remain maximally recognizable even with bright Halloween makeup.

Create an ultra-realistic Halloween beauty fashion photograph of an adult woman styled as a bold, glamorous vampire with bright neon-green and orange makeup. Extreme close-up portrait, professional beauty photography with a direct-flash effect, with the composition as close to the reference as possible.

POSE AND COMPOSITION

The woman's face occupies almost the entire frame, slightly tilted to the side and turned toward the camera at a three-quarter angle. Her head is positioned diagonally, her gaze is directed straight into the lens, and her expression is bold, playful, and provocative.

Her mouth is wide open, with her tongue sticking out forward and slightly downward. On her tongue are two small metallic piercing balls positioned vertically, one behind the other. Two small, sharp white vampire fangs are visible on her upper jaw.

One hand is raised toward her face. Her index and middle fingers form an open V-shaped pose near her lips and chin, emphasizing her bright manicure. The remaining fingers are naturally bent. Her hand is positioned in the right foreground and does not cover her eyes or main facial features.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the woman's real facial shape and proportions. Her head must be naturally sized, her eyes symmetrically positioned while retaining her natural individual asymmetry, and her nose and lips must maintain their original shapes.

The open mouth must have an anatomically correct shape. The tongue must have a natural length and thickness, without excessive enlargement. The vampire fangs must be small, realistic, and correctly positioned among the upper teeth.

The hand must be proportionate to the face, with naturally sized fingers, correctly formed joints, and anatomically accurate positioning. No oversized palms, extra fingers, or deformed nails.

HAIR

The hair must strictly retain its original color, be long, thick, and worn loose, styled in large, expressive Hollywood waves with deep S-shaped curves and volume at the roots.

The hairstyle features a side part. The hair frames the face on both sides and falls in large waves along the shoulders, extending beyond the frame.

Bright temporary orange and acid-green color accents are added to individual strands, as in the reference, while the main original hair color remains clearly distinguishable. Realistic texture of individual hair strands and natural shine.

MAKEUP — HALLOWEEN GLAM

Extremely detailed, vibrant Halloween makeup combining acid green, intense orange, and deep black.

The eyebrows are thick and expressive, retaining their original shape and color, neatly brushed upward.

The eyelids feature a complex eyeshadow gradient: acid green at the inner corners of the eyes, bright orange across the upper eyelids and above the crease, and deep black along the lash line. Wide, dramatic black winged eyeliner with very long, sharp wings extending toward the temples.

Black eyeliner on the lower eyelids, fine decorative strokes, and thick, long false eyelashes on both the upper and lower lash lines. Around the outer corners of the eyes are artistic black lines resembling spiderweb-like stitches, with small orange and green dots.

On the forehead near the hairline, on the temple, and along one cheek are thin decorative black stitches with miniature colored accents, creating the effect of stitched doll skin. All stitches are drawn with cosmetics, without any real injuries.

The skin retains its natural original tone, with visible texture, soft contouring, and luminous highlighter on the cheekbones and bridge of the nose.

The lips are covered in bright, glossy orange lipstick with a precisely defined outline. Preserve the natural shape and volume of the lips. The inside of the mouth and the tongue must look realistic, without colored filters.

EYES AND CONTACT LENSES

Preserve the original shape, placement, and size of the eyes. For the Halloween look, use decorative contact lenses: one eye with a bright green iris, the other with a fiery orange iris and a dark outer ring.

The colored contact lenses must look like real cosmetic accessories and must not alter the anatomy of the eyes. The pupils are round, naturally sized, with realistic flash reflections.

MANICURE AND ACCESSORIES

Long, pointed stiletto-shaped nails with a glossy finish. One nail is bright orange, another is acid green, and the remaining nails follow a similar contrasting color scheme.

The nails feature thin black decorative crosses and short lines imitating stitches. The manicure must be extremely sharp and realistic, with neatly shaped nail plates.

Several thin silver and black rings on the fingers. A small silver hoop nose piercing. Two metallic piercing balls on the tongue. Small silver accessories on the ears.

CLOTHING

The woman is wearing a black gothic outfit, almost entirely concealed by the tight framing. A small section of a black lace collar or sheer lace fabric near the neck is visible at the bottom of the image.

The clothing must not distract attention from the face, makeup, hair, and manicure.

BACKGROUND AND LIGHTING

The background is very dark, almost completely black, without distinguishable objects or decorations.

A bright, direct frontal flash illuminates the face, hair, and hand, creating the characteristic effect of professional beauty photography with high detail.

The skin looks natural, with subtle highlights on the nose, lips, and cheekbones. The makeup colors are rich and contrasting, but without neon glow or colored lighting.

No red lighting, smoke, blurred face, or excessive filters.

CAMERA AND FRAMING

Extreme close-up beauty portrait. The camera is positioned at face level, using an 85–100mm lens with natural portrait perspective.

The face occupies the central and upper parts of the frame. The eyes are positioned in the upper third of the image, while the open mouth and tongue are in the lower central area. The hand with the bright manicure is positioned in the right foreground.

The hair fills the left side and edges of the frame in large waves. The upper part of the head extends partially beyond the photograph's boundaries, while the bottom of the frame ends at the level of the hair and hand.

The main focus is on the eyes, makeup, lips, fangs, tongue, and manicure. High detail sharpness, natural skin texture, professional beauty retouching without a plastic-like effect, maximum photorealism, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, accurate facial and hand anatomy, long voluminous wavy hair with the main original color preserved, bright orange-and-green makeup, dramatic black winged eyeliner, decorative stitches, multicolored contact lenses, glossy orange lips, small vampire fangs, an extended tongue with piercings, bright manicure, and an extreme close-up composition strictly matching the reference.`,

  negative: `wrong identity, altered facial features, unrecognizable woman, generic AI face, face swap, idealized face, changed head shape, changed facial oval, changed nose, enlarged eyes, enlarged lips, changed chin, changed main hair color, short hair, thin hair, flat hairstyle, missing Hollywood waves, oversized head, distorted face, asymmetrical eye placement beyond natural asymmetry, incorrect anatomy, oversized mouth, oversized tongue, unnaturally long tongue, duplicated tongue, deformed teeth, oversized vampire fangs, missing fangs, extra fangs, incorrectly positioned fangs, missing tongue piercings, extra tongue piercings, oversized hands, enlarged palms, extra fingers, missing fingers, fused fingers, deformed joints, malformed nails, incorrect V-shaped hand pose, hand covering eyes, missing orange makeup, missing acid-green makeup, missing black winged eyeliner, missing decorative stitches, real wounds, blood, real tattoos, wrong contact lens colors, deformed pupils, glowing eyes, missing bright manicure, short nails, missing nose piercing, incorrect jewelry, excessive skin smoothing, plastic-looking skin, waxy skin, cartoon, anime, illustration, CGI, 3D render, neon glow, colored lighting, red lighting, smoke, bright background, distracting objects, blurry face, low resolution, distorted perspective, cropped eyes, obscured lips, hidden tongue, logos, watermarks, unwanted inscriptions, foreign objects, AI artifacts.`
},

{
  id: "048",
  title: "Ghostface Selfie",
  image: "prompt-048.PNG",

  positive: `Use the uploaded photographs of the woman and man as the only sources of their appearance. Strictly preserve the real facial features, head shape, eyes, eyebrows, nose, lips, cheekbones, chin, age, skin tone, natural asymmetry, and original hair color of each person. Do not alter their appearance or idealize their faces. The woman must remain maximally recognizable, and the man must retain his appearance beneath the costume and mask.

Create an ultra-realistic cinematic Halloween photograph of an adult couple in the aesthetic of 2000s teen horror. The woman is taking a selfie with a man dressed as Ghostface from the movie Scream, while sitting with him on a bed in a cozy bedroom. Atmospheric vintage photography, with the composition strictly matching the reference.

POSE AND COMPOSITION

The woman is positioned in the right foreground, kneeling on a soft bed, with her body slightly turned sideways toward the camera. Her legs are bent and directed to the right, with her hips naturally positioned on the mattress. Her torso leans slightly forward and to the left.

Her head is turned over her shoulder toward the camera, showing her face at a three-quarter angle. She looks directly into the lens with a slight mysterious smile, her lips closed.

Her right arm is extended forward and to the left, holding a small vintage digital camera with its screen facing toward her. A miniature selfie of the couple is visible on the screen. Her hand and the camera are positioned in the left foreground.

The man sits behind the woman on the left, leaning slightly toward her. His head, covered by the white Ghostface mask, is positioned next to her head, slightly above her shoulder. The man looks toward the digital camera through the eye openings of the mask.

The couple is positioned very close together, creating the atmosphere of a playful Halloween selfie.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the natural proportions of both people. The woman's head must be naturally sized, her shoulders feminine, and her neck of natural length.

Her bust is full, size 4, harmoniously proportionate to her figure. Her waist is defined but realistic. Her hips and bent legs have natural proportions, without excessive enlargement.

Her extended arm must have an anatomically correct length, her hand must be proportionate to her body, and her fingers must naturally hold the digital camera. Do not enlarge the arm or hand due to perspective.

The man has a natural masculine physique, normal shoulder width, and correct proportions of the head, arms, and torso.

HAIR AND HAIRSTYLE

The woman's hair must strictly retain its original color and be medium-length or long, according to the original photograph, styled in soft, voluminous waves with a side part.

The front strands beautifully frame her face, while the remaining hair falls freely over her shoulders and down her back. The hairstyle is slightly tousled, inspired by romantic hairstyles of the 2000s.

A small silver decorative tiara with delicate sparkling elements rests on the crown of her head.

The man's hair is completely concealed beneath the black hood of his costume.

WOMAN'S MAKEUP

Soft glamorous makeup in the Y2K aesthetic.

The skin retains its original natural tone, with visible texture, soft contouring, and subtle peach-pink blush.

The eyebrows are neatly shaped, preserving their original form. The eyelids feature soft brown and pink-beige eyeshadows, thin black winged eyeliner, and long, thick eyelashes.

The lips retain their natural shape and are covered with soft pink-nude lipstick with a subtle glossy shine. Her gaze is flirtatious and confident.

Do not change her original eye color.

WOMAN'S CLOTHING

The woman is wearing a fitted, soft pink top made from thin, semi-sheer textured fabric with long flared sleeves.

The fabric features a subtle floral pattern. The neckline is soft and feminine, emphasizing the natural line of her décolletage.

Over the top, she wears a wide black corset belt that accentuates her waist, featuring small silver decorative details.

She is wearing blue high-waisted jeans that fit closely around her hips and become looser below the knees.

She wears several thin rings on her fingers. Her nails are long, pointed, and finished with a metallic silver manicure.

MAN'S LOOK — GHOSTFACE

The man is wearing the classic Ghostface costume from the movie Scream.

A long, loose black robe with a deep hood completely conceals his hair and most of his head.

His face is covered by the recognizable elongated white mask with black oval eye sockets, a long narrow nose, and a large, elongated open mouth.

The mask has a smooth, slightly glossy surface, with realistic shadows inside the eye sockets and mouth.

The costume is entirely black, without additional decorations. The man sits calmly and does not hold any weapons.

DIGITAL CAMERA AND DETAILS

In the woman's hand is a small vintage digital camera from the early 2000s, silver and black in color, with a small rectangular screen.

The screen faces toward the woman and is partially visible to the viewer at an angle. The display clearly shows a selfie of the woman and the masked man together.

The camera must be realistically sized, with her fingers correctly positioned around its body. A thin black camera strap is attached around her wrist.

BACKGROUND AND ATMOSPHERE

A cozy teenage bedroom in the aesthetic of the 2000s.

Behind the couple is a light-colored bed with a soft textured bedspread, white pillows, and a wooden headboard.

The walls are covered with numerous small vintage posters, magazine cutouts, music photographs, and covers of old movies, arranged in a slightly chaotic manner.

In the lower part of the frame, on the bed, lies an open eyeshadow palette in pink and brown shades, a small candle with a warm flame, and several cosmetic accessories.

The room looks lived-in, cozy, and slightly messy, with the atmosphere of a Halloween evening.

LIGHTING AND COLOR GRADING

Warm amber-golden light from a table lamp illuminates the woman's face, hair, and upper body.

Soft, deep shadows fall across the walls. The man in the black costume is partially immersed in dim light, while the white mask stands out brightly against the dark background.

The color grading is vintage, with muted brown, golden, pink, and black tones. Subtle film grain and soft contrast.

No bright red lighting, neon, artificial glow, or excessive retouching.

CAMERA AND FRAMING

The camera is positioned slightly above bed level, directed toward the couple at a slight angle.

35–50mm lens, natural perspective without strong wide-angle distortion.

The woman occupies the central and right portions of the frame, while the man is positioned behind her on the left. Her extended arm holding the digital camera is located in the left-central part of the image.

The frame includes both characters' heads, the woman's upper body, her bent legs in jeans, most of the man's figure, the bed, and details of the room.

Professional cinematic Halloween photography with the atmosphere of an amateur photograph from the 2000s, natural skin texture, realistic fabrics, soft film grain, maximum photorealism, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, natural anatomy of the couple, kneeling pose with an extended arm holding a digital camera, the man in the classic Ghostface costume positioned behind her, a soft pink top, black belt, blue jeans, silver tiara, warm lighting, cozy bedroom with vintage posters, and an exact composition matching the reference.`,

  negative: `wrong identity, altered facial features, unrecognizable woman, generic AI face, face swap, blended face, idealized faces, changed head shape, changed eye color, changed original hair color, incorrect age, oversized head, enlarged breasts, exaggerated shoulders, enlarged arms, oversized hands, enlarged hips, excessively narrow waist, shortened torso, distorted anatomy, unnatural body proportions, deformed legs, incorrect joints, extra limbs, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrect kneeling pose, distorted camera, oversized digital camera, missing digital camera, incorrect camera screen, wrong selfie on camera screen, missing camera strap, wrong Ghostface mask, deformed Ghostface mask, missing mask, incorrect black hood, visible man's hair, incorrect costume, extra costume decorations, weapons, knives, blood, wounds, missing pink top, wrong jeans, missing black corset belt, missing silver tiara, incorrect manicure, tattoos, glasses, modern smartphone instead of vintage digital camera, empty bedroom, missing vintage posters, incorrect lighting, neon lighting, red lighting, artificial glow, excessive retouching, plastic-looking skin, waxy skin, cartoon, anime, illustration, CGI, 3D render, blurry faces, low resolution, strong wide-angle distortion, cropped heads, cropped camera, cropped important details, advertising text, logos, watermarks, AI artifacts.`
},

{
  id: "049",
  title: "Enchanted Fawn",
  image: "prompt-049.PNG",
  imagePosition: "center 20%",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her facial features, eye shape, nose, lips, facial oval, age, skin tone, and original eye and hair color. Do not alter or idealize her appearance. The woman must remain maximally recognizable.

Create an ultra-realistic Halloween fashion photograph featuring the woman dressed as a seductive woodland fawn. Professional cinematic fashion photography with a luxurious woodland-inspired Halloween aesthetic.

POSE AND COMPOSITION

The woman is kneeling on a light-colored floor, sitting back on her bent legs, with her torso leaning slightly forward.

Both arms are extended downward, with her palms resting naturally on the floor between her knees. Her fingers are elegantly positioned, with anatomically correct proportions.

Her head is turned at a three-quarter angle, and her mysterious gaze is directed to the side. Her expression is soft, alluring, and slightly mysterious.

Preserve natural anatomy, a feminine figure, a full size 4 bust, a defined waist, and harmonious body proportions.

Her head, shoulders, arms, waist, hips, and bent legs must remain naturally proportioned. Do not exaggerate any body features.

HAIR AND ACCESSORIES

Her long, thick hair strictly retains its original color and is styled in soft, voluminous waves with natural shine and realistic individual strands.

On her head are large, branching, velvety brown antlers with a realistic natural structure and elegant symmetrical placement.

Soft deer ears extend from the sides of her head, featuring warm brown fur on the outside and lighter beige-pink tones on the inside.

The antlers and ears look like luxurious realistic costume accessories, securely positioned without distorting the shape of her head.

MAKEUP — WOODLAND FAWN

Beautiful glamorous Halloween makeup in chocolate-brown, caramel, and peach tones.

The skin retains its original natural tone and realistic texture, with soft contouring, warm peach blush, and delicate highlights.

Expressive winged black eyeliner, softly blended chocolate eyeshadow, long thick eyelashes, and beautifully defined eyebrows that preserve their original shape.

Small decorative white fawn spots are painted across her forehead and cheeks in a natural, symmetrical arrangement.

A small black deer nose is delicately painted on the tip of her real nose, without altering its anatomical shape.

Her lips retain their natural shape and volume, finished with soft nude lipstick.

The makeup combines glamorous beauty photography with realistic woodland animal-inspired details, without transforming her face into an animal muzzle.

CLOTHING

The woman wears a fitted chocolate-brown corset top with delicate lace trim, a beautiful V-shaped neckline, and secure bust support.

The corset follows her natural figure, emphasizing her waist and décolletage without artificially enlarging her bust or distorting her anatomy.

A short, voluminous, multilayered brown tulle skirt with soft, airy layers and decorative white fawn spots.

A beautiful satin bow is positioned at the waist, and a small fluffy deer tail is attached to the back of the skirt.

Dark brown knitted thigh-high socks extend above her knees, featuring realistic knit texture and a comfortable fitted appearance.

The costume neatly covers all intimate areas and maintains an elegant, glamorous Halloween fashion aesthetic.

BACKGROUND AND LIGHTING

A minimalist cream-beige photography studio with a smooth light-colored floor and a clean, warm neutral background.

Beautiful warm sunlight streams through a nearby window, creating long diagonal shadows across the floor and background.

The lighting softly illuminates the woman's face, hair, antlers, costume, and skin, emphasizing the natural textures of the velvet, lace, tulle, and knitted fabric.

Warm cinematic color grading with rich chocolate-brown, caramel, cream, and golden-beige tones.

CAMERA AND FRAMING

Professional fashion photography with a 50–70mm lens and natural portrait perspective.

The composition fully includes the branching antlers, deer ears, woman's entire figure, extended arms, hands, corset, skirt, bent legs, and thigh-high socks.

The camera captures the kneeling pose from a flattering natural angle without stretching the limbs or enlarging the head.

Sharp focus on the woman's face, costume, and antlers. Natural skin texture, realistic fabrics, detailed hair, cinematic lighting, professional fashion retouching, maximum photorealism, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, preservation of her original facial features and hair color, accurate kneeling pose with both palms resting on the floor, luxurious woodland fawn costume, large branching brown antlers, soft deer ears, glamorous chocolate-and-peach makeup with white fawn spots, chocolate corset, layered brown tulle skirt, dark knitted thigh-high socks, warm sunlight, and maximum photorealism.`,

  negative: `wrong identity, altered facial features, generic AI woman, idealized face, face swap, blended face, changed eye shape, changed nose, changed lips, changed facial oval, changed age, changed skin tone, changed original eye color, changed original hair color, short hair, thin hair, unnatural wig, oversized head, enlarged shoulders, exaggerated breasts, artificial bust enlargement, excessively narrow waist, distorted torso, enlarged hips, unnatural body proportions, incorrect anatomy, extra arms, extra legs, extra fingers, missing fingers, fused fingers, malformed hands, incorrect joints, distorted kneeling pose, unnatural leg position, floating hands, hands not touching the floor, incorrect antlers, missing antlers, broken antlers, extra antlers, missing deer ears, incorrect animal ears, animal muzzle, transformed animal face, oversized painted nose, missing white fawn spots, incorrect makeup, missing corset, incorrect neckline, missing lace trim, missing tulle skirt, missing satin bow, missing deer tail, missing thigh-high socks, exposed intimate areas, transparent costume, plastic-looking skin, waxy skin, excessive smoothing, cartoon, anime, illustration, CGI, 3D render, artificial glow, neon lighting, red lighting, dark interior, distracting background, blurry face, low resolution, cropped antlers, cropped head, cropped hands, cropped legs, distorted perspective, inscriptions, logos, watermarks, AI artifacts.`
},

{
  id: "050",
  title: "Enchanted Rose Fairy",
  image: "prompt-050.PNG",
  imagePosition: "center 15%",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her face, facial features, proportions, age, natural asymmetry, eye color, skin tone, and hair color. Do not alter or idealize her appearance. The woman must remain maximally recognizable.

Create an ultra-realistic Halloween fantasy fashion photograph of a luxurious woodland flower fairy. Professional fantasy beauty and fashion photography, maximum photorealism, 8K quality.

POSE AND COMPOSITION

The woman stands in the center of the frame, her torso slightly turned at a three-quarter angle, her waist naturally curved, and one hip extended to the side.

Her head is turned sideways, her gaze directed beyond the camera, and her lips slightly parted. Her expression is mysterious, confident, feminine, and elegant.

Her arms are gracefully extended to the sides, with her elbows slightly bent. Her hands and fingers are naturally positioned, with anatomically correct proportions.

Preserve the woman's natural body proportions, including a full bust, defined waist, proportionate hips, delicate shoulders, and anatomically correct arms and hands.

HAIR AND HAIRSTYLE

Very long, thick, perfectly straight, silky hair strictly retaining its original color.

The hair features a beautiful side part and falls smoothly down to her waist, with natural shine, realistic individual strands, and luxurious volume.

Two soft pink roses are placed near her temple, delicately decorating the hairstyle without covering her face.

The hair must remain straight, smooth, and flowing, without curls or artificial color changes.

MAKEUP — LUXURIOUS FLOWER FAIRY

Luxurious glamorous makeup in delicate pink, rose-brown, and warm bronze tones.

The skin retains its original natural tone and realistic texture, with soft luminous highlights and elegant bronze contouring.

Beautifully defined eyebrows preserving their natural shape, softly blended pink-brown eyeshadow, precise black winged eyeliner, and long, thick eyelashes.

The lips retain their natural shape and volume, finished with glossy pink-berry lipstick.

The makeup is elegant, feminine, and inspired by luxurious fantasy beauty photography, without excessive retouching or artificial facial changes.

COSTUME — FLORAL CORSET

A luxurious fitted floral corset with an opaque nude-colored base, completely adorned with three-dimensional pastel pink roses, fresh green leaves, and delicate golden branches.

The roses have realistic layered petals, soft blush-pink shades, and natural botanical textures.

The green leaves are detailed, with visible veins and natural variations in color. Thin golden branches elegantly weave between the flowers, creating a sophisticated fairytale design.

The corset beautifully follows the natural curves of the woman's figure, emphasizing her waist and bust without artificially changing her anatomy.

Her shoulders and collarbones remain exposed.

A short, asymmetrical mini skirt made from dense layers of green leaves and delicate pink flower buds.

The skirt has realistic botanical volume and texture, with carefully arranged overlapping leaves and floral details. It fully covers all intimate areas.

Beautiful floral bracelets made from miniature pink flowers and green leaves decorate both wrists.

WINGS — FOUR TRANSLUCENT FAIRY WINGS

Four enormous translucent fairytale butterfly wings extend from the woman's back.

The two upper wings rise gracefully upward, creating an elegant elongated silhouette.

The two lower wings spread outward to the sides, forming a luxurious balanced composition.

The wings are symmetrical, anatomically and structurally believable as fantasy costume wings, and fully visible within the frame.

Their surfaces are made from an extremely delicate pearlescent membrane with intricate golden-silver veins.

Subtle iridescent shades of pastel pink, mint green, champagne, and pearl shimmer across the translucent surfaces.

The wings catch the soft daylight, revealing delicate transparent textures, realistic reflections, and sophisticated iridescence.

The wings must look ethereal, luxurious, lightweight, and realistic, without resembling cartoon illustrations or plastic props.

BACKGROUND AND LIGHTING

A clean cream-white studio wall without decorations.

Soft natural daylight illuminates the woman's face, hair, floral costume, and transparent wings.

Delicate pastel color grading with soft pink, mint, champagne, pearl, cream, and natural green tones.

Natural shadows add realistic depth and dimension to the flowers, leaves, and translucent wing membranes.

No distracting objects, dark interiors, colored spotlights, neon effects, or excessive artificial glow.

CAMERA AND FRAMING

Professional fantasy fashion photography with the camera positioned at chest level, using a 50–70mm lens and natural perspective.

The woman stands centrally, with her elegant pose, floral corset, asymmetrical leaf skirt, and four enormous wings clearly visible.

The composition extends from the highest tips of the wings to the middle of her thighs.

Both upper and lower wings must fit fully within the image boundaries without cropping.

The woman's recognizable face, long straight hair, exposed shoulders, extended arms, floral bracelets, and detailed costume remain clearly visible.

Extremely detailed natural skin texture, realistic individual hair strands, delicate flower petals, botanical leaves, golden branches, and transparent pearlescent wings.

Professional fashion lighting, sophisticated fantasy styling, natural color grading, realistic materials, maximum photorealism, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman from the uploaded photograph, strict preservation of her original facial features, eye color, skin tone, and hair color, luxurious long straight silky hair with two pink roses, glamorous pink-brown makeup, three-dimensional floral corset, short asymmetrical green leaf skirt, floral wrist bracelets, four enormous transparent pearlescent butterfly wings with golden-silver veins, elegant standing pose, cream-white studio background, and maximum photorealism.`,

  negative: `wrong identity, altered facial features, unrecognizable woman, generic AI face, face swap, blended face, idealized face, changed facial proportions, changed age, changed skin tone, changed eye color, changed original hair color, dyed hair, short hair, curly hair, wavy hair, thin hair, unnatural wig, oversized head, enlarged eyes, enlarged lips, exaggerated breasts, artificial bust enlargement, excessively narrow waist, enlarged hips, distorted torso, broad shoulders, unnatural body proportions, incorrect anatomy, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrect joints, unnatural standing pose, missing pink roses in hair, crown, tiara, horns, animal ears, missing floral corset, incorrect corset, transparent corset base, missing pink roses, artificial-looking flowers, missing green leaves, missing golden branches, missing floral bracelets, missing leaf skirt, exposed intimate areas, missing wings, two wings instead of four, extra wings, asymmetrical wings, deformed wings, cropped wings, opaque wings, dark wings, feathered angel wings, bat wings, insect body, plastic-looking wings, cartoon wings, oversized artificial glow, neon lighting, colored spotlights, dark background, distracting decorations, plastic-looking skin, waxy skin, excessive smoothing, excessive retouching, cartoon, anime, illustration, CGI, 3D render, blurry face, low resolution, distorted perspective, cropped head, cropped arms, cropped wing tips, tattoos, inscriptions, logos, watermarks, AI artifacts.`
},
  
{
  id: "051",
  title: "Haunted Harvest",
  image: "prompt-051.PNG",
  imagePosition: "center 15%",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her real facial features, head shape, facial oval, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter her appearance or idealize her face. The woman must remain maximally recognizable even under Halloween makeup.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult woman dressed as a seductive autumn scarecrow. Professional atmospheric photography, with the composition, pose, costume, and lighting matching the reference as closely as possible.

POSE AND COMPOSITION

The woman is sitting on the ground among tall, dry autumn grass, with her legs bent at the knees and spread wide apart in a natural position. Her knees point outward and are positioned partially closer to the camera, creating an expressive composition.

Her torso leans slightly forward, and her shoulders are relaxed. Her head is strongly but naturally tilted toward one shoulder, with her face turned directly toward the lens. Her chin is slightly lowered, and her gaze is directed upward into the camera from beneath her brows. Her facial expression is mysterious, playful, and slightly sinister.

Her arms are positioned between her legs, with her hands resting on the ground near her hips. Her fingers are naturally bent. Her hair falls freely along her face and over her chest.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the woman's real, feminine body proportions. Her head must be naturally sized, her shoulders delicate and naturally proportioned, and her neck anatomically correct in length.

Her bust is full, size 4, harmoniously proportionate to her shoulders, rib cage, and waist. The corset supports her bust without unnaturally pushing it upward or distorting its shape. Her waist is defined but realistic, and her torso has a natural length.

Her legs must have natural length and thickness, with anatomically correct knee shapes. Do not enlarge the thighs or knees due to perspective. Her arms must be proportionate to her body, with correctly shaped hands and fingers.

The head tilt must be achieved through a natural movement of the neck, without unnatural curvature of the spine.

HAIR AND HEADWEAR

The hair must strictly retain its original color. It is long, thick, worn loose, and styled in soft, voluminous waves. The strands are slightly tousled, freely framing her face and falling over her shoulders. Do not change the original hair shade.

On her head is a large, soft scarecrow hat made from aged dark-brown fabric. The hat features a tall, uneven, pointed crown with a bent tip and a wide, asymmetrical brim. Visible distressing and unfinished seams appear along the edges.

A thick, light-beige rope is wrapped around the crown and tied into several knots. The hat is slightly tilted to one side, following the angle of her head.

MAKEUP — GLAMOROUS SCARECROW

Professional Halloween makeup in a warm autumn color palette. The skin retains its original natural tone, with visible texture, soft bronze contouring, and expressive terracotta blush.

Numerous small dark-brown freckles are scattered across the bridge of her nose and cheeks. Her eyebrows are expressive and retain their original shape. The eyelids feature brown and copper-gold eyeshadow, long black winged eyeliner, and thick eyelashes.

A small black-brown painted triangle with a thin outline appears on the tip of her nose, imitating the stitched nose of a scarecrow.

Her lips are covered in muted pink-brown lipstick. Long, curved black lines extend from the corners of her mouth across her cheeks, intersected by short vertical strokes to create the effect of a stitched doll-like smile. All lines are painted with cosmetics, without any real wounds.

Preserve the natural shape of her lips, eyes, and nose.

CLOTHING — AUTUMN SCARECROW

The woman wears a short, fitted corset dress made from aged dark-brown fabric with a matte texture. The upper part features a sculpted, deep neckline that emphasizes her natural bust. Decorative uneven fabric patches trim the edges of the neckline.

Several small, light-yellow decorative elements resembling pieces of straw are placed around the bust area.

A short cape made from coarse gray-brown burlap rests over her shoulders, with uneven, pointed edges. Around her neck is a small collar made from light-colored fabric petals.

Her waist is accentuated by several wraps of thick, light-colored rope. The sleeves and cuffs feature coarse burlap, protruding bundles of decorative straw, and uneven fabric edges.

She wears opaque striped tights with wide horizontal stripes in dark brown and gray-beige. Her shoes are partially concealed by the grass and the lower edge of the frame.

The costume must look realistic, with detailed textures of fabric, rope, and straw.

BACKGROUND AND ATMOSPHERE

A dense field of tall, dry autumn grass in golden-beige, sandy, and muted brown shades. Long stems surround the woman on all sides, with some blades of grass positioned close to the lens and softly blurred.

The background contains only dry vegetation and warm autumn colors. No buildings, close-up trees, pumpkins, graveyards, or additional decorations.

The atmosphere evokes a mysterious autumn Halloween photoshoot in the middle of an abandoned field.

LIGHTING AND COLOR GRADING

Soft, warm, natural golden-hour light illuminates the woman's face, hair, and shoulders. Sunlight filters through the dry grass, creating golden highlights and a softly blurred background.

Vintage color grading with warm caramel, sandy, honey, and brown tones. Natural shadows and moderate contrast.

No red lighting, neon, artificial glow, or excessive skin processing.

CAMERA AND FRAMING

The camera is positioned slightly above the woman's face level and angled gently downward, creating a slightly elevated perspective, as in the reference.

50–70mm lens, natural perspective without wide-angle distortion.

The woman occupies the central part of the frame. Her head with the large hat is positioned in the upper third of the image, her torso and décolletage in the center, and her spread knees and striped tights in the lower portion.

The bottom edge of the frame falls around her lower legs, and her shoes may remain outside the photograph. Her face, hat, shoulders, corset, arms, and most of her legs must be fully visible.

Professional cinematic Halloween fashion photography, natural skin texture, realistic hair, detailed makeup, textured burlap and dry grass, soft depth of field, maximum photorealism, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, natural anatomy, a seated pose with knees spread apart and head tilted, long wavy hair retaining its original color, a large brown hat with rope, expressive makeup featuring a stitched smile, a brown corset with burlap and straw, striped tights, tall golden grass, and warm autumn lighting strictly matching the reference.`,

  negative: `wrong identity, altered facial features, unrecognizable woman, generic AI face, face swap, blended face, idealized face, changed head shape, changed facial oval, changed eye shape, changed nose, changed lips, changed chin, changed age, changed skin tone, changed eye color, changed original hair color, dyed hair, short hair, thin hair, straight flat hair, unnatural wig, oversized head, enlarged shoulders, exaggerated breasts, artificial bust enlargement, unnaturally pushed-up bust, excessively narrow waist, shortened torso, distorted rib cage, enlarged hips, oversized thighs, oversized knees, shortened legs, distorted anatomy, unnatural body proportions, deformed spine, unnaturally twisted neck, incorrect head tilt, extra arms, extra legs, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrect joints, incorrect seated pose, closed knees, straight legs, floating hands, missing scarecrow hat, small hat, incorrect hat shape, missing pointed crown, missing bent hat tip, missing rope on hat, missing freckles, missing stitched smile, real stitches, real wounds, blood, incorrect nose makeup, missing corset, incorrect neckline, missing burlap cape, missing straw details, missing rope belt, missing striped tights, exposed intimate areas, incorrect costume, plastic-looking fabric, artificial-looking straw, pumpkins, graveyards, buildings, close-up trees, other people, weapons, tattoos, glasses, inscriptions, logos, watermarks, plastic-looking skin, waxy skin, excessive skin smoothing, excessive retouching, cartoon, anime, illustration, CGI, 3D render, neon lighting, red lighting, artificial glow, blurry face, low resolution, strong wide-angle distortion, cropped face, cropped hat, cropped shoulders, cropped corset, missing visible legs, AI artifacts.`
},

{
  id: "052",
  title: "Cowgirl Glam",
  image: "prompt-052.PNG",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her individual facial features, eye shape, nose, lips, facial oval, skin tone, eye color, natural facial proportions, age, and original hair color. Do not alter or idealize her appearance. Do not copy the appearance of the model from the reference example. The woman must remain maximally recognizable.

Create an ultra-realistic close-up fashion beauty portrait of a young adult woman in the luxury cowgirl glam aesthetic. Professional high-fashion Western beauty photography with dramatic direct-flash lighting, sophisticated makeup, and maximum photorealism.

HAIRSTYLE

A perfectly sleek, geometric shoulder-length bob with an absolutely straight, blunt cut and dense texture.

The hair is straight, silky, smooth, and mirror-shiny, with a precise geometric silhouette and naturally realistic individual strands.

At the front, short, thick, straight bangs are neatly styled beneath the cowboy hat, creating a sharp, polished fashion look.

Strictly preserve the woman's natural hair color from the uploaded photograph. Do not dye, recolor, highlight, or otherwise change the original hair shade.

MAKEUP — LUXURY WESTERN GLAM

Striking Western-inspired glamorous makeup with highly intricate graphic eye detailing.

Warm caramel-brown eyeshadow extends dramatically toward the temples, creating an elongated and expressive eye shape without changing the woman's natural eye anatomy.

Dramatic black cat-eye eyeliner features long, sharp, perfectly defined wings extending outward toward the temples.

A delicate row of tiny silver rhinestones follows the upper eyeliner wing, emphasizing the shape of the eyes and adding luxurious sparkling details.

The inner corners of the eyes feature contrasting white graphic swirls, extending elegantly along the bridge of the nose and resembling decorative Western-style ornaments.

The white ornamental makeup must be finely detailed, symmetrical where appropriate, and painted directly onto the skin.

Extremely long, thick black eyelashes create a dramatic beauty effect.

The lower eyelids are accentuated with softly blended warm brown-burgundy eyeshadow, adding depth and intensity to the gaze.

The eyebrows retain their natural shape and color, appearing neatly groomed and softly defined.

The skin retains its original natural tone and realistic texture, enhanced with a bronzed, radiant makeup finish.

Intense wet-look highlighter illuminates the cheekbones and bridge of the nose, creating bright glossy reflections under direct flash lighting.

Soft contouring and warm peach blush sculpt the face without changing its real anatomical proportions.

The lips retain their original natural shape and volume.

The lip makeup features a dark nude-brown lip liner with a precisely defined outline, a lighter caramel-pink center, and an extremely glossy, mirror-like finish.

The overall makeup is bold, glamorous, luxurious, and meticulously detailed, combining modern beauty fashion with sophisticated Western-inspired decorative elements.

COWBOY HAT AND ACCESSORIES

The woman wears a large statement cowboy hat featuring a striking brown-and-white cow print.

The hat has wide, elegantly curved brims with a structured Western silhouette.

A brown leather hatband wraps around the crown, decorated with small metallic studs and a distinctive silver bull ornament.

The cow-print pattern is realistic, with irregular brown patches against a creamy white base.

The hat must have believable proportions and realistic fabric, leather, and metal textures.

One of the woman's hands is raised toward the hat, elegantly holding the edge of the brim.

The hand is covered by a fitted black leather glove with a realistic smooth texture and subtle reflections.

Her fingers are naturally positioned around the brim, with correct anatomy and realistic proportions.

CLOTHING — WESTERN FASHION

The woman wears a fashionable Western-inspired outfit coordinated with the cowboy hat.

The clothing features a matching brown-and-white cow-print design, creating a cohesive luxury cowgirl aesthetic.

The visible upper portion of the outfit is stylish, fitted, and sophisticated, with realistic fabric texture and carefully tailored details.

The clothing complements the hat, makeup, and hairstyle without distracting attention from the woman's face.

POSE AND EXPRESSION

The woman's head is slightly tilted forward and turned toward the camera.

Her gaze is directed straight into the lens, creating a confident, seductive, and powerful fashion expression.

Her lips are relaxed, emphasizing the glossy nude-brown makeup.

One gloved hand gracefully holds the edge of the cowboy hat.

Her shoulders remain naturally positioned, with anatomically correct proportions.

The pose feels bold, glamorous, and effortless, resembling a luxury Western fashion campaign.

BACKGROUND AND LIGHTING

A completely black studio background without visible decorations or distracting objects.

Harsh direct frontal flash lighting illuminates the woman's face, hair, hat, and gloved hand.

Bright highlights appear on the cheekbones, nose, glossy lips, sleek hair, metallic studs, silver rhinestones, and leather glove.

Deep, dramatic shadows create strong contrast against the black background.

The lighting emphasizes realistic skin texture, intricate makeup details, glossy surfaces, and the rich textures of the Western accessories.

No artificial neon glow, colored lighting, excessive filters, or plastic-looking skin.

CAMERA AND COMPOSITION

An ultra-realistic close-up beauty portrait framed down to the shoulders.

The woman's face is the central focus, with the cowboy hat prominently visible above her head.

Her gloved hand holding the brim is included naturally in the composition.

The sleek bob haircut, straight bangs, graphic eye makeup, silver rhinestones, white ornamental swirls, and glossy lips are clearly visible.

Professional high-fashion portrait photography with natural perspective, sharp focus on the eyes and makeup, detailed skin texture, realistic hair, sophisticated direct-flash lighting, and maximum photorealism.

MAIN PRIORITY: Maximum recognizability of the woman from the uploaded photograph, strict preservation of her natural facial features, eye color, skin tone, and original hair color, perfectly sleek geometric bob with straight bangs, dramatic caramel-brown eyeshadow, long black winged eyeliner, silver rhinestones, decorative white Western-style eye swirls, glossy nude-brown lips, brown-and-white cow-print cowboy hat with a silver bull ornament, black leather glove holding the brim, coordinated Western outfit, black studio background, and luxury direct-flash beauty photography.`,

  negative: `wrong identity, altered facial features, unrecognizable woman, generic AI face, face swap, blended face, idealized face, copied face from reference model, changed facial oval, changed eye shape, changed nose, changed lips, changed age, changed skin tone, changed eye color, changed original hair color, dyed hair, blonde hair unless naturally blonde, black hair unless naturally black, artificial highlights, long hair, curly hair, wavy hair, layered haircut, uneven bob, missing blunt cut, missing straight bangs, thin bangs, messy hair, unnatural wig, oversized head, enlarged eyes, exaggerated lips, artificial lip enlargement, distorted face, incorrect anatomy, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrect joints, oversized glove, missing black leather glove, missing cowboy hat, incorrect hat shape, missing cow-print pattern, incorrect cow-print colors, missing leather hatband, missing metallic studs, missing silver bull ornament, distorted hat brim, hand covering the face, missing winged eyeliner, short eyeliner wings, missing silver rhinestones, oversized rhinestones, missing white ornamental swirls, incorrect graphic makeup, smudged eye details, missing glossy lips, matte lips, unnatural facial contouring, excessive bronzing, plastic-looking skin, waxy skin, excessive smoothing, excessive retouching, cartoon, anime, illustration, CGI, 3D render, neon lighting, colored lighting, bright background, distracting objects, blurry face, low resolution, distorted perspective, cropped eyes, obscured makeup, cropped important hat details, tattoos, glasses, inscriptions, logos, watermarks, AI artifacts.`
},

{
  id: "053",
  title: "Leopard Hair Glam",
  image: "prompt-053.PNG",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her individual facial features, eye shape, nose, lips, facial oval, skin tone, eye color, natural facial proportions, age, and original hair color. Do not alter or idealize her appearance. Do not copy the appearance or hair color of the model from the reference example. The woman must remain maximally recognizable.

Create an ultra-realistic fashion beauty portrait of a young adult woman in a luxurious leopard-inspired glam aesthetic. Professional high-fashion beauty photography with dramatic direct-flash lighting, intricate leopard hair art, radiant bronzed makeup, and maximum photorealism.

HAIRSTYLE — LEOPARD HAIR ART

Very long, perfectly straight, sleek hair with an exceptionally smooth texture and mirror-like glossy shine.

The hair features a precise center part and flows freely below the waist, with realistic individual strands, natural density, and a luxurious silky appearance.

Strictly preserve the woman's original base hair color from the uploaded photograph. Do not dye or replace the natural base shade.

The main feature of the hairstyle is a large, graphic leopard print applied directly to the surface of the hair on one side of the head.

The pattern consists of contrasting irregular spots, broken rosettes, and elongated stripes of different sizes in rich dark-brown and black shades.

The leopard print begins almost at the roots and continues along the entire visible length of one side of the hair.

The spots follow the natural direction of the straight hair strands, creating the realistic appearance of professional stencil hair art or carefully applied temporary hair coloring.

The woman's original base hair color remains clearly visible between the leopard spots, preserving the natural underlying shade.

The opposite side of the hairstyle remains completely solid-colored, strictly matching the woman's original natural hair color without additional patterns or highlights.

The leopard pattern must be sharp, sophisticated, realistic, and integrated into the hair surface rather than appearing as a separate fabric, wig, or accessory.

The hair retains its smooth, straight silhouette and glossy finish on both sides.

MAKEUP — LUXURY BRONZED GLAM

Luxurious bronzed glamorous makeup inspired by high-fashion beauty photography.

The eyebrows retain their original natural shape and color, appearing neatly groomed and softly defined.

Softly blended brown-bronze eyeshadow enhances the eyes, creating elegant warmth and depth.

Dramatic elongated black cat-eye eyeliner features sharp, precise wings extending toward the temples.

Extremely long, thick black eyelashes create a glamorous and expressive gaze.

The woman's original eye shape, placement, and eye color must remain unchanged.

The skin retains its original natural tone and realistic texture, including subtle visible pores and natural facial details.

Warm bronzer enhances the complexion without changing the woman's natural skin color.

Delicate peach-pink blush adds softness to the cheeks.

Pronounced wet-look highlighter creates luminous reflections on the cheekbones and bridge of the nose, especially under direct flash lighting.

The lips retain their original natural shape and volume.

The lip makeup features a dark nude-brown lip pencil defining the natural lip contour, a lighter caramel-nude center, and a transparent mirror-like gloss layered on top.

The overall makeup is radiant, polished, glamorous, and highly detailed without excessive smoothing or artificial facial alterations.

POSE AND EXPRESSION

The woman is sitting with her back partially turned toward the camera.

Her torso is angled away from the lens, while her head turns gracefully over her shoulder to look directly into the camera.

One shoulder is positioned closer to the camera, creating a beautiful three-quarter composition.

Her back is exposed, emphasizing the elegant pose and the length of her hair.

Her facial expression is confident, seductive, and sophisticated, with a direct, captivating gaze.

With one hand, she gently holds a long strand of hair, naturally displaying the smooth texture and decorative leopard pattern.

Her fingers are elegantly positioned with realistic proportions and anatomically correct joints.

Her head, shoulders, arms, torso, and hands retain natural feminine proportions without distortion.

CLOTHING — LEOPARD FASHION

The woman wears a stylish semi-sheer leopard-print top with thin black straps.

The fabric features a realistic animal-print pattern with dark brown and black spots, creating a coordinated luxury fashion aesthetic.

The top follows the natural contours of her body, with realistic fabric tension, delicate transparency, and visible textile texture.

A matching leopard-print bottom completes the outfit.

The clothing is fashionable, sophisticated, and coordinated with the leopard hair art without distracting attention from the woman's recognizable face and hairstyle.

LIGHTING AND BACKGROUND

A smooth, clean light-gray studio background without decorations or distracting objects.

Harsh direct frontal flash lighting illuminates the woman's face, hair, shoulders, and upper body.

The flash creates expressive highlights on the glossy straight hair, radiant cheekbones, bridge of the nose, lips, and exposed skin.

Soft but distinct shadows provide realistic depth and contrast against the neutral background.

The leopard hair pattern remains clearly visible, with sharp dark markings and the woman's natural base hair color showing between the spots.

Natural skin texture with visible pores, realistic hair reflections, and detailed fabric textures.

No neon lighting, colored glow, excessive filters, or artificial skin smoothing.

CAMERA AND COMPOSITION

Professional luxury fashion beauty portrait with natural perspective and high-detail sharpness.

The woman is photographed from a three-quarter rear angle, turning her head over her shoulder toward the camera.

Her recognizable face, one exposed shoulder, part of her back, long sleek hair, and the hand holding a hair strand are clearly visible.

The composition emphasizes the striking leopard-print hair art, with enough of the hairstyle visible to show the pattern extending from near the roots down the length of the hair.

Sharp focus on the woman's eyes, facial features, makeup, and detailed leopard hair pattern.

Professional direct-flash fashion photography, realistic individual hair strands, natural skin texture, sophisticated beauty retouching, and maximum photorealism.

MAIN PRIORITY: Maximum recognizability of the woman from the uploaded photograph, strict preservation of her real facial features, original eye color, skin tone, and natural base hair color, very long perfectly straight mirror-glossy hair with a center part, large dark-brown and black leopard hair art covering one side while the other side remains in her original hair color, luxurious bronzed glam makeup, dramatic cat-eye eyeliner, glossy nude-brown lips, over-the-shoulder seated pose, exposed back, matching leopard-print outfit, light-gray studio background, and harsh direct-flash lighting.`,

  negative: `wrong identity, altered facial features, unrecognizable woman, generic AI face, face swap, blended face, idealized face, copied face from reference model, changed facial oval, changed eye shape, changed nose, changed lips, changed age, changed skin tone, changed eye color, changed original base hair color, dyed base hair, incorrect natural hair shade, copied reference model hair color, short hair, shoulder-length hair, curly hair, wavy hair, frizzy hair, messy hair, uneven hair length, side part, dull hair, artificial wig, leopard-print wig, leopard-print fabric attached to hair, animal fur instead of human hair, missing leopard hair pattern, leopard pattern on both sides, leopard spots covering the entire head, incorrect leopard pattern, blurry spots, poorly defined markings, unrealistic hair coloring, floating spots, detached pattern, missing original hair color between spots, oversized head, enlarged eyes, artificially enlarged lips, exaggerated breasts, unnaturally narrow waist, distorted shoulders, incorrect anatomy, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrect joints, unnatural neck rotation, incorrect over-the-shoulder pose, missing exposed back, missing hand holding hair, missing leopard-print outfit, incorrect clothing, missing thin black straps, missing glossy lips, matte lips, missing winged eyeliner, incorrect eye makeup, excessive bronzing, plastic-looking skin, waxy skin, excessive smoothing, excessive retouching, cartoon, anime, illustration, CGI, 3D render, neon lighting, colored lighting, dark background, busy background, distracting objects, blurry face, low resolution, distorted perspective, cropped important hair details, obscured leopard pattern, tattoos, glasses, inscriptions, logos, watermarks, AI artifacts.`
},

{
  id: "054",
  title: "Toxic Girl",
  image: "prompt-054.PNG",
  imagePosition: "center 20%",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her real facial features, head shape, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, and original eye and hair color. Do not idealize or alter her facial proportions. The woman must remain maximally recognizable even under elaborate SFX makeup.

Create an ultra-realistic Halloween beauty fashion photograph titled "TOXIC GIRL." An adult woman styled as a dangerously beautiful toxic girl: acid-green SFX makeup, black cracks with green drips, a painted toothy smile, yellow TOXIC warning tape, and a bright neon-lime top. Maximum photorealism, professional beauty photography, 8K quality.

POSE AND COMPOSITION

The woman is centered in the frame, facing forward, with the composition extending from the top of her head to the lower part of her torso.

Her torso naturally leans slightly to the left, while her head is gently tilted toward one shoulder and positioned slightly forward. Her gaze is direct, cold, and confident, looking straight into the camera.

Her shoulders are exposed, her arms are relaxed and lowered, and parts of her forearms in neon sleeves are visible along the edges of the frame.

Her real mouth is closed.

Preserve the natural feminine anatomy and proportions of the woman from the original photograph: a normally sized head, delicate shoulders, a natural neck, anatomically correct rib cage and torso length, a feminine waist, and correctly proportioned arms and joints.

Her bust is full, approximately size 4, with a natural anatomical shape and harmonious proportions relative to her body, without excessive enlargement or compression from the top.

HAIR

The hair must strictly retain its original color.

Long, thick, perfectly straight, smooth, silky hair falling freely along both sides of her face, over her shoulders and chest, and down her back.

A natural part, volume at the roots, individually defined realistic strands, and soft highlights.

TOXIC MAKEUP

Professional Halloween SFX makeup in an acid-green, lime, yellow, and charcoal-black color palette, while preserving the woman's natural skin tone.

Intense black smoky eyes combined with neon-lime eyeshadow and yellow-green inner corners. Black-and-green blending along the lower eyelids and long, dramatic black eyelashes.

The eyebrows retain their original shape and color.

Thin, bright-green toxic drips extend from the lower eyelids down the cheeks.

Numerous thin, branching black cracks cover the forehead, temples, cheeks, jawline, neck, collarbones, shoulders, and upper chest. Acid-green and yellow-lime pigment is visible inside the cracks, accompanied by individual green droplets.

This is exclusively a cosmetic optical SFX effect, without any real wounds or skin damage.

TOOTHY SMILE

The real mouth remains physically closed, and the lips are covered with black makeup.

A wide, terrifying smile is painted over the skin, featuring two rows of long, narrow, white triangular teeth, grayish shading, and black spaces between the teeth.

The painted smile extends toward the cheeks but does not alter the real shape of the lips, jaw, or face. The teeth are painted only.

TOXIC WARNING TAPE

Exactly three realistic bright-yellow warning tapes featuring the large black word TOXIC:

1. The first tape runs across the upper forehead, just below the hairline.
2. The second tape runs diagonally across the painted smile and cheek.
3. The third tape wraps around the neck and extends diagonally across the collarbones and upper chest toward the opposite shoulder.

Realistic folds, subtle signs of wear, and natural contact shadows.

CRITICALLY IMPORTANT

The chest, neck, and shoulders must feature only cracks, green toxic drips, and TOXIC warning tape.

NO additional eyes, pupils, irises, or eyelashes anywhere on the body. The only eyes are the woman's two real eyes on her face.

CLOTHING

A fitted, acid-lime strapless top with a straight neckline, made from smooth, matte, elastic fabric.

The top leaves the shoulders, collarbones, and upper chest exposed, revealing the body art.

Both arms are covered with long, fitted neon-green glove sleeves that begin below the shoulders.

BACKGROUND AND LIGHTING

A simple, clean, light-gray studio background with a cool undertone, without decorations or objects.

Soft, even, neutral-white beauty lighting from the front and slightly above.

Natural skin texture, sharply defined black cracks, and saturated neon-green pigments without artificial glowing effects.

Soft, natural shadows behind the hair and shoulders.

CAMERA AND FRAMING

Camera positioned at face level, 85mm portrait lens.

The frame must fully include the top of the head and hair, face, neck, both shoulders, bust, and torso down to the lower edge of the top.

The head is slightly shifted to the right, while the torso leans to the left.

No wide-angle distortion.

Maximum detail in the skin, hair, eyes, SFX makeup, TOXIC warning tape, and fabric.

Ultra-photorealistic professional Halloween beauty photography, realistic skin texture, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, preservation of her original face, eye color, skin tone, and hair color, acid-green SFX makeup, branching black cracks with green toxic drips, a physically closed mouth with a painted toothy smile, exactly three yellow TOXIC warning tapes in their specified positions, no additional eyes anywhere on the body, a fitted neon-lime strapless top, matching neon-green glove sleeves, light-gray studio background, natural anatomy, and maximum photorealism.`,

  negative: `Wrong or blended identity, altered face, eyes, nose, lips, or jaw, incorrect eye or hair color, generic AI face, excessive beautification, plastic-looking or poreless skin,

Giant head, overly broad shoulders, shortened torso, exaggerated chest, unnaturally tiny waist, distorted proportions, incorrect anatomy, malformed arms, hands, or joints,

Incorrect hair, short hair, curly hair, artificial hair color, wig,

Open real mouth, real exposed teeth, altered jaw, real wounds, gore, torn skin, anatomical damage,

Extra eyes on the chest, body, neck, or shoulders, third eye, body eyes, pupils, irises, or eyelashes outside the face, extra facial eyes,

Missing or incorrect black cracks, missing green toxic drips, excessive fantasy mutations,

Missing or additional TOXIC warning tape, incorrect tape placement, unreadable or random text; only the word TOXIC is allowed,

Incorrect or multicolored clothing, straps, missing neon top, missing neon sleeves, jewelry, tattoos, accessories,

Dark or cluttered background, laboratory, abandoned building, smoke, fire, Halloween decorations, red, blue, or purple lighting,

Fisheye effect, wide-angle distortion, CGI, 3D render, anime, cartoon, illustration, blur, low quality, watermark, logo, random text.`
},

{
  id: "055",
  title: "Nightmare Muse",
  image: "prompt-055.PNG",

  positive: `Use the uploaded photograph of the woman as the ONLY source of her appearance. Strictly preserve her recognizable face, head shape, eyes and their color, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, and original hair color, length, and texture. Do not idealize or alter her appearance.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult woman in a seductive feminine interpretation of Freddy Krueger. Dark vintage aesthetics of an old boiler room, professional fashion photography, 8K quality.

POSE

The woman is reclining sideways in a relaxed position in a massive vintage armchair made of dark-brown leather with wide wooden armrests.

Her body is positioned diagonally, her back rests naturally against the chair, and her torso is slightly turned toward the camera. Her hips are closer to the front edge of the seat, while her legs extend diagonally to the left and are slightly bent.

Her head is slightly tilted, her gaze directed straight into the camera, and her expression is confident, bold, and mysterious, with her lips slightly parted.

One arm is bent near her face, displaying Freddy's metal glove, with the elbow close to her torso. Her other arm rests casually on the armrest.

ANATOMY

Strictly preserve the natural feminine proportions of the woman from the original photograph: a normally sized head, narrow, delicate, gently sloping shoulders, a natural neck and collarbones, normal torso length, a proportionate rib cage, feminine waist and hips, and long, slender legs and arms.

A full bust, approximately size 4, with a natural shape and harmonious proportions relative to her figure, without enlarging the rib cage or creating an artificial push-up effect.

No perspective-based enlargement of the hips, legs, arms, or shoulders.

HAIR AND HAT

The hair must strictly retain its original color, length, and texture. It is smooth, worn loose, with natural volume, freely framing her face and falling over her shoulders and chest.

She wears the classic dark-brown felt Freddy Krueger hat, featuring a wide brim, an indented crown, and a dark hatband.

The hat must not conceal her face.

MAKEUP

Cinematic glam horror makeup without facial injuries.

Natural skin with visible texture, warm brown smoky eyes, soft winged eyeliner, thick eyelashes, delicate contouring, and subtle blush.

Glossy nude-brown lips retaining their strictly natural shape.

No burns, scars, or blood on the face.

CLOTHING

A loose, textured Freddy Krueger sweater featuring wide horizontal dark-red and muted swamp-green stripes, slightly aged, with small decorative holes.

Long, loose sleeves and a wide, relaxed neckline exposing the collarbones and décolletage.

The sweater follows the natural contours of her narrow shoulders and bust without widening her silhouette. Its lower hem is slightly raised, revealing a small portion of her abdomen.

Very short light-blue high-waisted denim shorts with distressed details and frayed edges.

Black large-mesh fishnet stockings decorated with small black satin bows.

GLOVE

An aged dark-brown leather glove with metal plates, copper fastenings, and rivets.

On four fingers, exactly FOUR long, narrow, curved steel blades extend upward and slightly to the side, without covering the face.

The glove must be correctly proportioned to the woman's hand.

BACKGROUND

A dark, abandoned industrial boiler room with a horror aesthetic.

Vintage electrical control panels, round gauges, switches, wires, and aged metal panels.

On the left, tall old windows allow cool, grayish daylight to enter.

Deep brown, bronze, black, and gray tones.

LIGHTING

Soft, directional warm amber-golden cinematic lighting illuminates the woman's face, hair, collarbones, and clothing, while the background remains darkened.

Subtle, realistic highlights reflect off the metal blades.

No neon, fire, smoke, or excessive visual effects.

CAMERA AND FRAMING

70–85mm lens.

The camera is positioned approximately 3–4 meters away, at mid-torso level or slightly above, capturing the woman from a subtle side angle.

Natural perspective without wide-angle enlargement.

The hat, face, hair, shoulders, torso, glove, shorts, and upper legs must be fully visible. The legs are cropped below mid-thigh level.

Ultra-photorealistic cinematic Halloween fashion photography, exact identity preservation, realistic female anatomy, narrow feminine shoulders, natural proportions, detailed knitwear, denim, aged leather and metal, warm vintage color grading, deep shadows, authentic abandoned boiler-room atmosphere, 8K quality.

MAIN PRIORITY: Maximum recognizability of the woman, preservation of her original facial features, eye color, hair color, hair length and texture, relaxed reclining pose in a massive dark-brown leather armchair, narrow feminine shoulders, natural body proportions, classic brown Freddy Krueger hat, dark-red and swamp-green striped sweater, distressed light-blue denim shorts, black fishnet stockings with satin bows, correctly proportioned leather glove with exactly four curved metal blades, and atmospheric vintage boiler-room lighting.`,

  negative: `Wrong or blended identity, generic AI face, altered face, eye color, or hair color, excessive beautification, plastic-looking or poreless skin,

Broad masculine shoulders, massive deltoids, oversized rib cage, forearms, or hands, enlarged breasts, hips, or legs, tiny head, unnaturally tiny waist, shortened torso, distorted anatomy,

Incorrect pose, rigid frontal sitting position, twisted torso or spine, perspective-enlarged thighs, legs, or arms, malformed joints, extra or missing limbs or fingers,

Incorrect hair or hair color, short hair, wig, face concealed by the hat or hair,

Burned, scarred, or bloody face, wounds, gore, altered facial anatomy,

Incorrect sweater or stripe colors, shoulder pads, oversized shoulders, missing denim shorts or fishnet stockings,

Incorrect glove, oversized hand, more or fewer than four blades, malformed, floating, or duplicated blades, blades covering the face,

Bright or modern interior, neon, fire, smoke, excessive red lighting,

Fisheye effect, wide-angle distortion, CGI, 3D render, anime, cartoon, tattoos, text, logos, watermark, duplicated woman, blur, low quality.`
},

{
  id: "056",
  title: "Bloody Circus Doll",
  image: "prompt-056.PNG",
  imagePosition: "center 30%",

  positive: `Use the uploaded photograph of the woman as the only source of her appearance. Strictly preserve her real face, head shape, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, and original eye and hair color. Do not idealize or alter her appearance. The woman must remain maximally recognizable.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult woman styled as a luxurious bloody circus doll from an abandoned Victorian theater of horrors.

POSE

The woman occupies the left and central parts of the frame, standing mostly with her back and left shoulder toward the camera, while slightly turning her torso.

She gracefully looks back over her shoulder directly into the lens, with her face at a three-quarter angle, chin slightly raised, and lips slightly parted.

Her expression is cold, mysterious, confident, and seductive. Her back and waist maintain a natural curve.

Her right arm extends backward toward the camera, with the elbow slightly bent. Her hand naturally holds the handle of a large antique butcher's cleaver.

Her arm, shoulder, and hand remain naturally sized, without perspective-based enlargement.

ANATOMY

Strictly preserve the natural proportions of the woman from the original photograph: a normally sized head, delicate feminine shoulders, natural bust, rib cage, waist, and torso length.

The corset supports her figure without excessively compressing or enlarging her bust.

Anatomically correct arms, hands, fingers, and joints.

No wide-angle distortions.

HAIR

The hair must strictly retain its original color.

Long, thick, loose hair styled in soft, slightly tousled waves, with natural volume and individual strands framing her face.

Realistic hair texture and shine.

MAKEUP

Luxury dark-circus porcelain doll makeup featuring burgundy-brown smoky eyes, long black winged eyeliner, and thick eyelashes.

Thin vertical black doll-makeup lines above and below the eyes.

Beneath one eye is a small dark-red artificial bloody tear, with several decorative blood drips on the cheekbone.

Glossy dark-cherry lips, slightly smudged at one corner, without altering their natural shape.

CLOTHING

A short, luxurious Victorian dark-circus cabaret dress.

A black-and-burgundy velvet corset with vertical boning, decorative lacing, and black lace.

Exposed shoulders and lowered, voluminous sleeves made from burgundy satin, black lace, and aged cream-colored ruffles.

A short, voluminous, multilayered skirt made from blood-red velvet, black tulle, and vintage lace, featuring small stains of theatrical fake blood.

A narrow burgundy choker decorated with metal studs.

CLEAVER

A large antique butcher's cleaver with a wide rectangular blade made from darkened, scratched steel, featuring decorative traces of artificial blood.

The cleaver points diagonally toward the lower-right corner of the image.

The blade occupies the right foreground and is slightly blurred by the shallow depth of field.

Realistic proportions, without contact with the body, wounds, or any scene of violence.

BACKGROUND

A luxurious abandoned Victorian circus theater featuring heavy burgundy velvet curtains, aged wood, tarnished golden decorative elements, and warm string lights.

On the right side of the background stands a large circular red-and-cream circus target mounted on a wooden stand, with several old throwing knives and decorative traces of artificial blood.

A worn wooden floor and subtle atmospheric haze.

LIGHTING

Soft, warm amber-golden cinematic light illuminates the woman's face, hair, shoulders, and dress.

Deep burgundy-brown shadows and warm bokeh from the string lights.

Muted vintage color grading without red neon lighting or plastic-looking skin.

CAMERA AND FRAMING

50–70mm lens.

The camera is positioned approximately at shoulder level, with natural perspective and moderately shallow depth of field.

The woman's face is positioned in the upper-left third of the image, her figure occupies the left and central areas, the cleaver appears in the right foreground, and the circus target is visible in the right background.

The frame extends approximately to the upper thighs, with the entire skirt visible.

Ultra-photorealistic 8K cinematic Halloween fashion photography, realistic skin, natural anatomy, detailed velvet, lace, hair, and aged metal, luxurious abandoned dark-circus atmosphere, warm vintage cinematic color grading.

MAIN PRIORITY: Maximum recognizability of the woman, strict preservation of her original facial features, eye color, skin tone, and hair color, elegant over-the-shoulder pose, natural feminine anatomy, long softly waved hair, luxurious dark-circus doll makeup with decorative fake-blood tears, black-and-burgundy Victorian corset dress, voluminous velvet and lace skirt, antique cleaver held safely toward the right foreground, circular circus target in the background, and warm cinematic lighting in an abandoned Victorian theater.`,

  negative: `Wrong or blended identity, altered face, incorrect eye or hair color, generic AI face, excessive beautification, plastic-looking or poreless skin,

Giant head, broad or muscular shoulders, enlarged breasts, unnaturally tiny waist, shortened torso, distorted rib cage or spine, unnatural body proportions,

Giant or elongated arm or hand, malformed hands, extra, missing, or fused fingers, broken joints, extreme perspective distortion,

Incorrect pose, front-facing pose, not looking over the shoulder, unnatural back arch,

Incorrect hairstyle or hair color, short hair, artificial-looking hair, wig,

Incorrect, light-colored, or colorful dress, modern outfit, missing corset or ruffles, exaggerated cleavage,

Oversized or distorted cleaver, cleaver touching or cutting the body, active violence, real wounds, gore, exposed tissue,

Missing circus target, modern or overly bright background, neon lighting, strong red lighting, cartoon Halloween decorations,

Fisheye effect, extreme wide-angle distortion, CGI, 3D render, anime, cartoon, illustration, tattoos, text, logos, watermark, duplicated woman, low quality, blur.`
},

{
  id: "057",
  title: "Crimson Clown",
  image: "prompt-057.PNG",

  positive: `Use the uploaded photograph as the only source of the woman's appearance. Strictly preserve her real facial features, head shape, eyes, eyebrows, nose, lips, facial oval, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter her appearance, do not replace her face with that of another character, and do not crop her head or hair.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult woman styled as a mysterious female clown inspired by the horror movie It. Reproduce the composition, pose, lighting, and color palette of the reference as accurately as possible.

POSE AND COMPOSITION

The woman is positioned in the center of the frame, captured in a close-up portrait from the head to the lower part of the chest.

Her torso leans slightly forward, her head is strongly tilted toward one shoulder, and her face is positioned at a slight angle.

She looks directly into the camera from beneath partially lowered eyelids. Her facial expression is mysterious, calm, and slightly frightening. Her lips are slightly parted.

HAIR

The hair must strictly retain its original color. It is long, thick, worn loose, and styled in large, soft waves.

Voluminous strands freely frame her face and fall over her shoulders.

MAKEUP — GLAMOROUS CLOWN

Light porcelain-style makeup with natural skin texture, while preserving the woman's original skin tone and recognizable facial features.

Expressive dark eyebrows, rich terracotta-red eyeshadow around the eyes, soft blending, long black eyelashes, and neatly defined winged eyeliner.

Small, natural-looking freckles are scattered across the cheeks and bridge of the nose.

Thin, curved burgundy-red lines are painted from the corners of the mouth outward across the cheeks, imitating a sinister clown smile.

The lips are a rich dark-burgundy color with a wet, glossy shine.

CLOTHING

The woman wears a vintage dark-burgundy clown costume with a deep neckline that emphasizes her full size 4 bust.

Around her neck is an enormous, voluminous, multilayered collar made from cream-white fabric with wide, wavy ruffles.

The fabric is dense and soft, with realistic folds.

RED BALLOON AND RIBBON

In one hand, the woman holds a thin white ribbon attached to a large red balloon.

The balloon is positioned directly above her head, occupies the upper part of the frame, and is partially cropped by the top edge of the photograph.

The white ribbon hangs freely and vertically in front of her face, passing across the forehead, eye area, and below the chin.

The hand holding the ribbon is positioned in the lower central part of the frame.

LIGHTING

The lighting must strictly match the reference: no red lighting, red illumination on the face, or red glow in the background.

The scene is illuminated by soft, muted warm light with a natural golden-beige tone.

Delicate amber and peach highlights appear on the face, accompanied by soft, deep shadows.

On the left side of the frame, a subtle milky-gray haze with a diffused whitish glow creates the effect of an old film photograph.

The lower part of the image features soft brownish-beige blur.

BACKGROUND AND COLOR GRADING

The background is very dark, almost black, with muted olive-green and brown tones, without any bright light sources.

Red appears only on the balloon, in the makeup, and in details of the costume.

The color grading is vintage and slightly faded, featuring soft contrast, warm skin tones, deep shadows, and delicate film grain.

CAMERA AND FRAMING

The camera is positioned at face level.

Close-up portrait, 85mm lens, shallow depth of field, soft vintage sharpness, realistic skin texture, and atmospheric fine-art photography.

The composition is slightly asymmetrical, with the balloon positioned directly above the head, the face gently tilted, and plenty of dark negative space surrounding the woman.

STRICT VISUAL REQUIREMENTS

Reproduce the soft lighting, muted colors, head position, balloon placement, ribbon placement, and overall dark vintage atmosphere of the original reference as accurately as possible.

Do not make the image excessively contrasty, glossy, or artificial.

Ultra-photorealism, high detail, professional cinematic Halloween beauty photography.

MAIN PRIORITY: Maximum preservation of the woman's recognizable appearance, accurate reference composition, soft warm lighting without red illumination, a large red balloon directly above her head, a thin white ribbon hanging in front of her face, a dramatic cream-white ruffled collar, mysterious clown makeup, and a dark, atmospheric vintage aesthetic.`,

  negative: `Wrong identity, blended identity, generic AI face, altered facial features, changed head shape, changed facial oval, incorrect eye color, changed eyebrows, nose, lips, cheekbones, or chin, altered age, changed skin tone, changed original hair color, artificial hair color, short hair, straight flat hair, wig, copied face of another character, excessive beautification, idealized facial proportions,

Oversized head, broad shoulders, unnatural neck curvature, distorted anatomy, exaggerated breasts, unnaturally narrow waist, malformed arms, hands, or fingers, extra or missing fingers,

Incorrect pose, straight head position, missing head tilt, looking away from camera, incorrect facial expression, face hidden by hair, cropped head, cropped hair,

Missing clown makeup, incorrect clown makeup, exaggerated clown nose, missing burgundy smile lines, incorrect eyeshadow, missing freckles, altered lip shape, excessively glossy or plastic-looking skin,

Missing burgundy clown costume, incorrect neckline, missing cream-white collar, small collar, flat collar, incorrect collar color, missing ruffles, artificial-looking fabric,

Missing red balloon, multiple balloons, incorrect balloon color, balloon beside the head instead of above it, balloon covering the face, incorrect balloon placement, missing white ribbon, thick ribbon, colored ribbon, ribbon behind the head, incorrect ribbon placement, missing hand holding ribbon,

Red studio lighting, red illumination on face, red glow in background, red fog, neon illumination, bright rim lighting, fire, excessive contrast, oversaturated colors, artificial glow, excessive skin smoothing, poreless skin,

Bright background, colorful background, modern decorations, distracting objects, missing dark vintage atmosphere, incorrect color grading, excessive sharpness, artificial HDR effect,

Fisheye effect, wide-angle distortion, CGI, 3D render, anime, cartoon, illustration, tattoos, inscriptions, logos, watermarks, duplicated woman, extra people, blurry face, low quality, AI artifacts.`
},
  
{
  id: "058",
  title: "Chucky's Revenge",
  image: "prompt-058.PNG",
  imagePosition: "center 15%",

  positive: `Use the uploaded photograph of the woman as the ONLY source of her appearance. Preserve her real facial features with maximum accuracy: head shape, facial oval, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, and skin tone. Do not alter the woman's identity, idealize her face, or replace it with another character's face. Strictly preserve her original eye color and hair color from the uploaded photograph.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult woman styled as a female version of the killer doll Chucky. Professional realistic photography, dark horror atmosphere.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

The woman's figure must look completely natural, harmonious, and anatomically correct.

Maintain realistic proportions between the head, shoulders, bust, waist, pelvis, hips, and legs.

The torso must have a normal anatomical length and must not appear shortened.

Shoulders are naturally proportioned, and the waist is slim but realistic.

The bust is full, approximately size 4, with a natural shape, volume, and position, without excessive enlargement.

The hips are feminine but not massive or disproportionately wide.

The legs are slender, with natural length and thickness, correctly proportioned relative to the torso.

No hypertrophied hips, enormous knees, excessively enlarged legs, shortened torso, unnatural spinal curvature, or deformed limbs.

POSE AND COMPOSITION

The woman is sitting on a wide, dark-brown wooden staircase inside an old building.

Her torso leans slightly backward and to one side, while her back maintains a naturally upright position.

Her legs extend forward and are slightly spread apart, with her knees pointing toward the camera.

The pose is relaxed, bold, and physically natural.

Her right hand is raised near her head, holding a small silver toy knife in her fist. The knife has a short, shiny blade pointing downward.

Her left hand rests palm-down on a wooden step beside her body, supporting her position.

Her head is slightly tilted.

She looks directly into the camera with a cold, confident, slightly frightening gaze.

Her lips are closed, and her facial expression is serious and defiant.

HAIRSTYLE

Long, thick hair, strictly retaining its original color, styled into two high ponytails on either side of the head.

Each ponytail is braided into a long, voluminous braid.

Several thin strands fall loosely around her face.

The hair looks natural, with realistic texture, individual strands, and authentic volume.

The original hair shade must remain unchanged.

MAKEUP — CHUCKY-INSPIRED HORROR

Makeup inspired by the Chucky doll aesthetic.

Natural skin texture, expressive eyebrows, brown eyeshadow, neatly defined winged eyeliner, long eyelashes, and soft-pink matte lips.

Preserve the woman's original eyebrow shape, eye shape, lip shape, and natural facial proportions.

Realistic theatrical SFX makeup on the face: a long reddish scar with neat black stitches extending from the upper forehead, across the eyebrow, bridge of the nose, and cheek, down toward the chin.

Several additional thin scars near the eye and corner of the mouth.

Dimensional, realistic special-effects makeup without excessive blood.

The scars and stitches are theatrical cosmetic effects and must not alter the woman's recognizable facial anatomy.

CLOTHING — CHUCKY-INSPIRED OUTFIT

A fitted long-sleeved turtleneck with a high collar, decorated with narrow, bright horizontal stripes in red, yellow, blue, green, and orange.

The stripes are clearly defined, evenly distributed, and realistically integrated into the fabric.

Over the turtleneck, she wears short light-blue denim overalls featuring wide adjustable straps, metal fasteners, a large rectangular chest pocket, prominent stitching, and short denim shorts with raw, unfinished edges.

The overalls flatter her full bust and slim waist while preserving natural anatomy and a realistic clothing fit.

The denim fabric has realistic texture, visible seams, natural folds, and subtle worn details.

On her legs are red large-mesh fishnet stockings with wide red elastic bands around the upper thighs.

Her legs appear slender and proportionate, with natural skin texture.

The clothing must look physically realistic, properly fitted, and naturally positioned on the body.

BACKGROUND AND ATMOSPHERE

An old stairwell with wide, dark-brown wooden steps, beige-gray square wall tiles, and metal handrails.

The environment resembles an aged apartment building entrance with authentic architectural details.

Warm, subdued lighting typical of an old apartment building entrance.

Cinematic soft shadows, realistic reflections on the wooden surfaces, and a subtly dark, eerie atmosphere.

The staircase extends naturally behind and beneath the woman, creating depth without distorting her body proportions.

The background remains realistic, atmospheric, and slightly unsettling.

LIGHTING AND COLOR GRADING

Warm, subdued cinematic lighting illuminates the woman's face, hair, clothing, and legs.

Soft shadows emphasize the textures of the denim, striped turtleneck, red fishnet stockings, and aged wooden staircase.

Natural color reproduction with slightly muted vintage tones.

The colorful stripes and red stockings remain vivid without becoming oversaturated.

The face is clearly visible, with realistic skin texture and natural dimensionality.

No neon glow, excessive red lighting, or artificial skin smoothing.

CAMERA AND PERSPECTIVE

Professional portrait photography using a 50–70mm lens, with natural perspective and no wide-angle distortion.

The camera is positioned approximately at the seated woman's chest level, at a sufficient distance from the model.

A frontal camera angle with a slight downward tilt.

The legs are positioned in the foreground but are NOT enlarged by perspective.

The knees and thighs must maintain realistic proportions relative to the head and torso.

The frame extends from the top of the head to the upper part of the shins.

Both braids, both hands, the knife, denim overalls, and red fishnet stockings must be clearly visible.

The woman's head must remain naturally proportioned relative to her body.

Her torso must retain its correct anatomical length, and her hips and knees must not appear enlarged by camera perspective.

Maximum photorealism, natural color reproduction, realistic skin with natural texture, detailed denim, sharply defined stripes on the turtleneck, professional fashion photography, high detail, 8K quality.

MAIN PRIORITY

Maximum facial resemblance to the original photograph, strict preservation of the woman's original eye color and natural hair color, natural human proportions, an anatomically correct seated pose, realistic perspective, and accurate preservation of the Chucky-inspired look.

The woman must have two long braids, theatrical stitched facial scars, a brightly striped turtleneck, short light-blue denim overalls, red fishnet stockings, and a small silver toy knife held near her head.

The dark-brown wooden staircase, warm subdued lighting, direct confident gaze, naturally proportioned legs, and realistic cinematic Halloween atmosphere must closely match the reference.`,

  negative: `Wrong identity, blended identity, generic AI face, altered facial features, changed head shape, changed facial oval, incorrect eye color, changed eyebrows, changed nose, changed lips, altered cheekbones or chin, changed age, changed skin tone, idealized face, excessive beautification, copied Chucky doll face, plastic doll face replacing the woman's real face,

Changed original hair color, dyed hair, artificial hair color, orange hair unless naturally orange, red hair unless naturally red, short hair, loose unbraided hair, missing braids, single braid, incorrectly positioned braids, thin artificial braids, wig, unnatural hair texture,

Wide-angle perspective, fisheye effect, extreme perspective distortion, oversized foreground legs, enormous thighs, enlarged knees, hypertrophied hips, excessively wide pelvis, disproportionately large lower body, shortened torso, oversized bust, artificial breast enlargement, overly small head, giant head, broad masculine shoulders, oversized rib cage, unnaturally narrow waist, distorted spine, unnatural spinal curvature, unrealistic anatomy,

Deformed arms, deformed legs, incorrect joints, twisted limbs, extra arms, extra legs, missing limbs, malformed hands, oversized hands, extra fingers, missing fingers, fused fingers, broken fingers, unnatural hand positions,

Incorrect seated pose, standing pose, lying pose, rigid posture, excessively arched back, unnatural leg placement, knees too close to camera, legs enlarged by perspective, incorrect head tilt, looking away from camera, smiling expression, open mouth,

Missing theatrical scars, missing black stitches, incorrect scar placement, excessive blood, real open wounds, gore, exposed tissue, extreme facial injuries, altered facial anatomy, excessive horror mutations, cartoon doll makeup,

Incorrect striped turtleneck, missing high collar, missing sleeves, incorrect stripe colors, oversized stripes, blurry stripes, missing denim overalls, incorrect denim color, long overalls, long denim trousers, missing chest pocket, missing metal fasteners, missing distressed denim edges, unrealistic clothing fit,

Missing red fishnet stockings, black fishnet stockings, incorrect stocking color, solid tights, missing large-mesh pattern, missing wide red thigh bands, distorted fishnet texture,

Missing toy knife, oversized knife, giant blade, incorrect knife shape, duplicated knife, floating knife, knife covering the face, incorrect knife direction, realistic injury, active violence,

Modern staircase, bright modern interior, incorrect stairs, missing wooden steps, missing tiled walls, missing handrails, outdoor background, colorful decorations, neon lighting, strong red lighting, excessive darkness obscuring the face, artificial glow,

Plastic-looking skin, waxy skin, poreless skin, excessive smoothing, excessive retouching, artificial body proportions, CGI, 3D render, anime, cartoon, illustration, low resolution, blurry face, motion blur, distorted perspective, cropped head, missing braids, cropped hands, missing visible stockings, tattoos, inscriptions, logos, watermarks, duplicated woman, extra people, AI artifacts.`
},

{
  id: "059",
  title: "Queen of Darkness",
  image: "prompt-059.PNG",

  positive: `Use the uploaded photograph as the only source of the woman's appearance. Strictly preserve her real facial features, head shape, eyes, eyebrows, nose, lips, facial oval, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter her appearance or replace her face with that of another character. The woman must remain maximally recognizable.

Create an ultra-realistic cinematic Halloween fashion photograph in the style of luxurious demonic gothic horror.

POSE AND COMPOSITION

An adult woman styled as a seductive Queen of Darkness is positioned in the center of the frame, photographed from the front, with the composition extending to her waist.

She has a full size 4 bust, emphasized by a deep neckline.

She wears a luxurious blood-red corset with black lace inserts, torn semi-transparent edges, delicate decorative elements, and gothic lacing.

Her body remains naturally proportioned, with an anatomically correct head, neck, shoulders, rib cage, waist, arms, and hands.

The composition is strictly symmetrical, with the woman's face and upper body forming the central focus.

HAIR

Long, thick, voluminous hair worn loose, styled in soft, slightly tousled waves with a center part.

The hair must retain its natural original color exactly as shown in the uploaded photograph.

Individual strands are clearly defined, with realistic texture, natural movement, and subtle highlights from the dramatic lighting.

Do not change the original hair shade or replace the woman's hairstyle with an artificial-looking wig.

MAKEUP — DEMONIC GOTHIC GLAM

Dramatic makeup featuring intense black smoky eyes, elongated sharp winged eyeliner, and dark eyeshadow extending up to the eyebrows.

The eyes appear rich red with a mystical glow, created as a supernatural cosmetic and visual effect while preserving the woman's original eye shape and recognizable facial anatomy.

Bloody streaks flow from beneath the eyes, creating a dramatic theatrical horror effect.

The lips are precisely defined with dark-burgundy lipstick and a wet, glossy finish.

Her facial expression is cold, commanding, and mysterious.

Her lips are slightly parted, and her gaze is directed straight into the camera.

Preserve the woman's natural lip shape, nose, cheekbones, chin, and facial proportions.

The skin retains realistic texture and dimensionality, with natural pores and carefully controlled highlights.

CLOTHING — BLOOD-RED GOTHIC CORSET

The woman wears a luxurious blood-red corset with a deep, sculpted neckline.

The corset features intricate black lace inserts, delicate gothic lacing, torn semi-transparent fabric edges, and elaborate decorative elements.

The rich red fabric has realistic texture, natural folds, and detailed stitching.

Black lace creates sophisticated contrast against the saturated crimson material.

The corset supports the woman's full bust naturally, without excessive enlargement, distortion, or unrealistic compression.

The overall silhouette is feminine, elegant, seductive, and anatomically believable.

JEWELRY AND ACCESSORIES

Around her neck is a massive black gothic necklace featuring a large inverted cross that extends down onto her chest.

The necklace is dark, ornate, and richly detailed, with realistic metallic textures and subtle reflections.

In her left hand, the woman holds an antique, realistic human skull near her shoulder.

The skull has natural anatomical proportions, aged bone texture, subtle surface imperfections, and believable shadows.

In her right hand, she holds a black-and-red rose with dark petals.

The rose features richly textured petals in deep burgundy, crimson, and nearly black shades.

Both hands are elegantly raised and positioned so that the skull and rose remain fully visible.

Her fingers are adorned with massive silver rings featuring intricate gothic designs.

Her nails are extremely long, sharp, and dark red, with a polished finish.

Small decorative scratches and traces of artificial blood are visible on her skin.

The scratches and blood are theatrical Halloween effects rather than real injuries.

The woman's hands, fingers, wrists, and arms must remain naturally proportioned and anatomically correct.

BACKGROUND — DEMONIC GOTHIC HALL

A dark gothic hall featuring tall architectural arches, elaborate demonic ornaments, scarlet flames, clouds of red smoke, and deep black shadows.

The environment resembles an ancient, luxurious gothic chamber filled with mysterious supernatural energy.

An intense red glow behind the woman's figure creates the effect of a mystical fiery halo.

The scarlet flames remain primarily in the background, framing the woman without obscuring her face or accessories.

Red smoke creates atmospheric depth, while dark architectural details remain subtly visible.

The color palette consists of saturated blood-red, charcoal-black, and dark burgundy.

The setting is dramatic, elegant, mysterious, and richly cinematic.

LIGHTING AND COLOR GRADING

High-contrast red rim lighting outlines the woman's hair, shoulders, and silhouette.

Soft controlled illumination falls across her face, neck, and chest, preserving realistic facial details and natural skin texture.

The intense crimson glow from the background creates a dramatic contrast against the black gothic architecture.

Subtle highlights reveal the intricate textures of the lace, corset fabric, metallic jewelry, silver rings, skull, rose petals, and individual hair strands.

Deep shadows enhance the luxurious demonic atmosphere without concealing the woman's recognizable face.

Professional cinematic color grading emphasizes blood-red, dark burgundy, and charcoal-black tones.

No plastic-looking skin, excessive smoothing, or artificial cartoon effects.

CAMERA AND FRAMING

The composition is strictly symmetrical, with the woman occupying the center of the frame.

The camera faces the woman directly, capturing her from the top of her head to approximately her waist.

Her face, hair, shoulders, neckline, corset, necklace, both hands, skull, and rose must be clearly visible.

The skull is positioned near one shoulder, while the black-and-red rose balances the composition on the opposite side.

Both the skull and the rose must be fully visible within the frame.

Natural portrait perspective without wide-angle distortion.

Sharp focus on the woman's eyes, facial features, makeup, and important accessories.

Realistic skin texture, highly detailed hair, intricate lace, metallic jewelry, aged bone, and rich gothic fabric textures.

The atmosphere resembles a luxurious gothic fashion photoshoot.

Maximum hyperrealism, high detail, professional color grading, cinematic Halloween fashion photography, 8K quality.

STRICT VISUAL REQUIREMENTS

Absolutely no inscriptions, letters, logos, watermarks, poster text, or typography.

Only the woman and the mystical gothic composition.

Do not alter the recognizability of her face.

Do not add extra fingers, distort the hands, or create a cartoon-like effect.

MAIN PRIORITY

Maximum preservation of the woman's real facial identity, original hair color, natural anatomy, luxurious blood-red gothic styling, symmetrical composition, realistic human skull and black-and-red rose, dramatic red lighting, mystical gothic hall with scarlet flames and red smoke, and an ultra-photorealistic demonic Halloween fashion aesthetic.`,

  negative: `Wrong identity, blended identity, generic AI face, altered facial features, changed head shape, changed facial oval, incorrect eye shape, changed eyebrows, changed nose, changed lips, altered cheekbones or chin, changed age, changed skin tone, copied face from another character, idealized face, excessive beautification, unrecognizable woman,

Changed original hair color, dyed hair, artificial hair shade, short hair, thin hair, straight flat hair, missing center part, artificial wig, unrealistic hair texture,

Oversized head, distorted neck, broad masculine shoulders, oversized rib cage, unnaturally narrow waist, shortened torso, enlarged breasts, disproportionate bust, distorted anatomy, unnatural body proportions, malformed arms, oversized hands, extra arms, extra hands, extra fingers, missing fingers, fused fingers, broken fingers, incorrect joints,

Incorrect pose, side-facing pose, looking away from camera, asymmetrical composition, cropped head, cropped face, cropped hands, missing accessories,

Missing smoky eye makeup, missing winged eyeliner, incorrect eye makeup, missing red mystical eye effect, altered facial anatomy, missing theatrical bloody tears, excessive gore, real wounds, exposed tissue, incorrect lipstick color, matte lips, plastic-looking skin, waxy skin, poreless skin, excessive smoothing, excessive retouching,

Missing blood-red corset, incorrect corset color, light-colored clothing, modern casual outfit, missing black lace, missing gothic lacing, missing deep neckline, unrealistic corset fit, distorted bust, exaggerated cleavage,

Missing gothic necklace, missing inverted cross, incorrect necklace design, missing silver rings, missing long dark-red nails, incorrect nail color, distorted jewelry,

Missing skull, extra skulls, cartoon skull, unrealistic skull anatomy, oversized skull, tiny skull, skull covering the face, cropped skull, floating skull, distorted skull,

Missing black-and-red rose, incorrect rose color, bright pink rose, white rose, extra roses, artificial-looking petals, cropped rose, rose covering the face,

Missing gothic hall, missing tall arches, missing demonic ornaments, missing scarlet flames, missing red smoke, missing crimson halo, bright modern interior, outdoor setting, incorrect background, colorful decorations,

Missing dramatic red lighting, blue lighting, green lighting, neon multicolored lighting, excessive artificial glow, overexposed face, face hidden in shadows, flat lighting, incorrect color grading,

Inscriptions, letters, random text, poster text, typography, logos, watermarks, tattoos, glasses, duplicated woman, extra people, cartoon, anime, illustration, CGI, 3D render, fisheye effect, wide-angle distortion, blurry face, low resolution, low quality, AI artifacts.`
},

{
  id: "060",
  title: "Dark Clown Glam",
  image: "prompt-060.PNG",

  positive: `Use the uploaded photograph of the woman as the ONLY source of her appearance. Strictly preserve her individual facial features, head shape, facial oval, eyes, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter or idealize her appearance. Do not copy the appearance of the woman from the reference image. The woman must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic close-up beauty portrait of a young adult woman in a dramatic dark clown Halloween glam aesthetic. Professional cinematic beauty photography with intense smudged makeup, dramatic flash lighting, realistic skin texture, and maximum photorealism.

HAIRSTYLE

The hair is styled into two high, voluminous, messy buns on either side of the head.

The buns have an airy, slightly tousled texture, with realistic volume, individually defined strands, and delicate loose flyaway hairs.

A precise center part separates the hairstyle naturally.

Two long, straight face-framing strands are left loose on both sides of the face, falling freely below the chin.

The loose strands are smooth, natural-looking, and clearly visible against the woman's face and shoulders.

Strictly preserve the woman's original natural hair color from the uploaded photograph.

Do not dye, recolor, highlight, or replace the original hair shade.

The hairstyle must look realistic, with natural roots, believable hair density, and individual strands rather than an artificial wig.

MAKEUP — DARK CLOWN GLAM

Dramatic dark Halloween makeup combining gothic beauty with a sinister clown aesthetic.

Intense black smoky eyes surround the eyes, with intentionally smudged, imperfect edges creating a raw, mysterious, and slightly chaotic effect.

The black eyeshadow extends around the upper and lower eyelids, emphasizing the woman's natural eye shape without altering her recognizable facial anatomy.

Extremely thick, long black eyelashes create a dramatic and expressive gaze.

The lower lash line is heavily darkened with black pigment and softly blended shadow.

Thin, elongated black makeup streaks extend downward from the outer and lower corners of the eyes.

The streaks are slightly irregular and expressive, ending in small decorative dark-red droplets resembling theatrical clown tears.

Above the eyebrows are sharp, elongated, upward-pointing black graphic elements.

These graphic shapes extend vertically and diagonally above the brows, creating dramatic clown-inspired ornamental details.

Small dark-red droplets appear at the tips of the upper graphic elements.

The eyebrows retain their original natural shape and color, appearing thick, expressive, and brushed upward.

The makeup is deliberately imperfect and artistically smudged while remaining professionally executed and highly detailed.

Preserve the woman's natural skin tone and realistic skin texture, including visible pores and subtle facial details.

CLOWN NOSE AND LIPS

The tip of the woman's nose is covered with metallic silver-graphite makeup.

A bright, realistic highlight creates the illusion of a small metallic clown nose painted directly onto the skin.

The metallic effect follows the natural shape of her nose without changing its anatomy or adding an oversized physical prosthetic.

The lips retain their original natural shape and volume.

They are covered with rich dark-wine lipstick featuring an intense glossy finish.

From both corners of the mouth, a wide, intentionally smudged dark-burgundy and black makeup line extends outward across the cheeks.

These lines form a sinister, exaggerated clown smile while preserving the woman's real mouth and jaw proportions.

Subtle, chaotic traces of red-burgundy makeup surround the mouth, enhancing the dramatic Halloween aesthetic.

The smudges are cosmetic effects rather than real injuries.

POSE AND EXPRESSION

The woman is turned toward the camera over her shoulder, with one shoulder positioned close to the lens.

Her upper body is angled away from the camera while her head turns slightly backward.

Her gaze is directed straight into the camera, creating an intense, captivating expression.

Her facial expression is bold, mysterious, confident, and slightly frightening.

Her mouth is slightly open, naturally emphasizing the glossy dark-wine lips.

One hand is raised gracefully toward her face.

The tips of her extremely long stiletto nails gently touch her lower lip.

Her fingers are elegantly curved, naturally proportioned, and anatomically correct.

The hand does not obscure the woman's recognizable facial features or important makeup details.

The pose feels intimate, dramatic, and sophisticated, resembling a luxury Halloween beauty campaign.

NAILS AND CLOTHING

The woman's nails are extremely long, sharply pointed stiletto nails.

The manicure is glossy dark red, almost black, with a smooth reflective surface.

Each nail has a realistic shape, consistent length, and precise pointed tip.

The nails are clearly visible near the woman's lips.

She wears a sophisticated black lace outfit featuring thin straps.

The fabric has intricate floral lace patterns, realistic transparency, and finely detailed texture.

A long black lace glove covers part of her arm and hand, complementing the gothic clown styling.

The lace glove must integrate naturally with the hand pose while allowing the dramatic manicure to remain clearly visible.

The overall outfit is elegant, dark, feminine, and luxurious.

LIGHTING AND BACKGROUND

Harsh directional flash lighting illuminates the woman's face, hair, shoulder, raised hand, and intricate makeup.

The flash creates expressive highlights on the metallic clown nose, glossy lips, dark stiletto nails, and natural skin.

Deep cinematic shadows enhance the dramatic dark-clown atmosphere.

The background is a dark interior with minimal visible details, remaining softly shadowed and unobtrusive.

The lighting emphasizes realistic facial texture, visible pores, detailed makeup strokes, individual hair strands, and the intricate black lace fabric.

Natural skin texture must remain visible without excessive retouching.

No plastic-looking skin, artificial smoothing, or exaggerated digital beauty filters.

CAMERA AND COMPOSITION

Ultra-realistic close-up beauty portrait with natural perspective.

The woman's recognizable face is the main focal point.

Both messy buns, the long face-framing strands, graphic eye makeup, metallic clown nose, glossy dark-wine lips, raised hand, and pointed stiletto nails are clearly visible.

The composition emphasizes the over-the-shoulder pose, direct gaze, dramatic makeup, and intimate interaction between the fingertips and lower lip.

Sharp focus on the woman's eyes, lips, makeup details, and nails.

Professional cinematic flash photography, natural skin texture with visible pores, realistic hair strands, detailed lace, sophisticated dark color grading, and maximum photorealism.

High-resolution luxury Halloween beauty photography.

MAIN PRIORITY

Maximum preservation of the woman's recognizable facial identity, natural skin tone, original eye color, and original hair color.

Two high voluminous messy buns with a center part and two long straight face-framing strands.

Dramatic smudged black smoky eyes, elongated black clown makeup streaks with small dark-red droplets, upward-pointing black graphic elements above the eyebrows, a metallic silver-graphite painted clown nose, glossy dark-wine lips, and an exaggerated smudged burgundy-black clown smile.

An over-the-shoulder pose with direct eye contact, one hand raised toward the lips, extremely long glossy dark-red stiletto nails, a black lace outfit with a long lace glove, dramatic directional flash lighting, deep shadows, and an atmospheric dark interior.`,

  negative: `Wrong identity, blended identity, generic AI face, altered facial features, changed head shape, changed facial oval, changed eye shape, changed eyebrows, changed nose, changed lips, altered cheekbones or chin, changed age, changed skin tone, changed eye color, idealized face, copied face from reference model, excessive beautification, unrecognizable woman,

Changed original hair color, dyed hair, artificial hair color, blonde hair unless naturally blonde, black hair unless naturally black, incorrect natural hair shade, missing buns, single bun, low buns, neat tight buns, flat buns, oversized buns, artificial wig, missing center part, side part, missing face-framing strands, short face-framing strands, curly loose strands, unrealistic hair texture,

Missing smoky eye makeup, light eye makeup, clean minimal makeup, perfectly symmetrical unsmudged makeup, missing black eye streaks, incorrect streak direction, missing dark-red droplets, excessive blood, missing upward-pointing graphic elements above eyebrows, incorrect eyebrow makeup, missing long eyelashes, altered eye anatomy,

Missing metallic clown nose, oversized clown nose, red clown nose, physical plastic clown nose, incorrect metallic color, distorted nose anatomy, missing metallic highlight,

Missing dark-wine lipstick, incorrect lipstick color, matte lips, artificially enlarged lips, missing smudged clown smile, incorrect smile shape, real wounds, torn skin, gore, excessive theatrical blood, distorted mouth, altered jaw shape,

Incorrect pose, front-facing shoulders, looking away from camera, missing over-the-shoulder pose, incorrect head rotation, unnatural neck curvature, rigid posture, missing raised hand, hand covering the face, fingertips not touching lower lip,

Short nails, rounded nails, square nails, incorrect nail color, missing stiletto manicure, excessively oversized nails, malformed nails, extra nails, fused nails, duplicated fingers, extra fingers, missing fingers, broken fingers, distorted hands, oversized hands, incorrect joints, unnatural finger positions,

Missing black lace outfit, incorrect clothing color, thick straps, missing lace glove, incorrect glove texture, opaque bulky glove, missing visible nails, distracting accessories, tattoos, glasses, jewelry covering makeup,

Bright background, colorful background, outdoor setting, neon lighting, red neon glow, excessive colored lighting, flat lighting, missing deep shadows, overexposed face, excessively dark face, incorrect flash lighting,

Plastic-looking skin, waxy skin, poreless skin, excessive skin smoothing, excessive retouching, artificial beauty filters, CGI, 3D render, anime, cartoon, illustration, fisheye effect, wide-angle distortion, distorted anatomy, blurry face, low resolution, low quality, inscriptions, logos, watermarks, duplicated woman, extra people, AI artifacts.`
},

{
  id: "061",
  title: "Pumpkin Glam",
  image: "prompt-061.PNG",
  imagePosition: "center 15%",

  positive: `Use the uploaded photograph of the woman as the ONLY source of her appearance. Strictly preserve her individual facial features, head shape, facial oval, eye shape, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter or idealize her appearance. Do not copy the appearance of the model from the reference image. The woman must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic close-up Halloween beauty portrait of a young adult woman in a striking black-and-orange pumpkin glam aesthetic. Professional cinematic Halloween beauty photography with intricate jack-o'-lantern makeup, dramatic directional flash lighting, realistic skin texture, and maximum photorealism.

HAIRSTYLE

Long, loose hair, predominantly straight, smooth, and naturally falling down the back and over the shoulders.

The hairstyle features a soft center part, with several thin, loose strands near the forehead.

Subtle natural volume at the roots, without elaborate styling.

The hair has realistic individual strands, natural movement, soft reflections, and believable density.

Strictly preserve the woman's original hair length and natural hair color from the uploaded photograph as closely as possible.

Do not dye, recolor, highlight, or replace the original hair shade.

Do not copy the hair color of the model from the reference image.

MAKEUP — HALLOWEEN PUMPKIN GLAM

Striking professional Halloween pumpkin makeup in a dramatic black-and-orange color palette.

The eyelids are covered with rich matte orange-terracotta eyeshadow, softly blended above the crease.

The warm orange pigment is saturated and clearly visible while maintaining realistic cosmetic texture.

The outer corners of the eyes are dramatically elongated with intense black smoky eyeshadow and long, sharp, graphic winged eyeliner.

The black eye makeup creates a bold, angular shape extending outward toward the temples.

Extremely thick, long black eyelashes emphasize the woman's natural eye shape.

Beneath each eye is an elongated black triangle with a sharp tip pointing downward along the cheek.

The triangles are clearly defined, symmetrical where appropriate, and painted directly onto the skin.

The woman's natural facial features and eye anatomy remain unchanged beneath the makeup.

PUMPKIN NOSE

The tip and lower part of the nose are completely covered with deep matte-black makeup.

The black shape forms a stylized inverted triangle resembling the carved nose of a Halloween jack-o'-lantern.

The painted nose design follows the woman's natural nose anatomy without changing its real shape or proportions.

The matte-black pigment has sharp, precise edges and realistic cosmetic texture.

JACK-O'-LANTERN SMILE

The main focal point of the makeup is an enormous, graphic jack-o'-lantern smile.

The woman's lips are completely covered with deep matte-black makeup.

A wide black zigzag line extends from both corners of the mouth across the cheeks.

Large, sharp black triangular teeth are arranged along the upper and lower edges of the line.

The triangular teeth alternate with one another, creating the characteristic jagged, carved smile of a Halloween pumpkin.

The design is bold, sharply defined, and professionally painted onto the skin.

The black teeth and zigzag lines form a dramatic optical illusion without changing the woman's actual lips, mouth, jaw, or facial anatomy.

The skin surrounding the design retains its original natural tone and realistic texture.

Several long, pointed black makeup elements extend downward from the underside of the chin along the front of the neck.

These pointed elements create a dramatic continuation of the pumpkin design.

All black shapes are cosmetic makeup effects rather than physical cuts, wounds, or alterations to the skin.

POSE AND EXPRESSION

The woman's torso is turned sideways, with the bare shoulder closest to the camera occupying the foreground.

Her head is turned back toward the camera and slightly raised.

She looks directly into the lens from beneath slightly lowered eyelids.

Her gaze is intense, confident, mysterious, and seductive.

Her facial expression remains composed, allowing the elaborate jack-o'-lantern makeup to create the frightening visual effect.

One hand is raised gracefully toward her face.

Her fingers are elegantly positioned near her chin and lower lip, drawing attention to the dramatic pumpkin smile.

Her hand, fingers, wrist, shoulder, and neck retain natural anatomical proportions.

The hand does not obscure the woman's recognizable facial features or important makeup details.

NAILS AND CLOTHING

The woman's nails are extremely long, sharply pointed stiletto nails.

The manicure features a glossy black-and-orange Halloween design.

The nail art combines deep black and vivid pumpkin-orange details with a smooth reflective finish.

Each nail has a realistic shape, precise pointed tip, and consistent proportions.

The nails are clearly visible near the woman's chin and lower lip.

She wears an elegant black off-the-shoulder outfit.

The outfit exposes the shoulder closest to the camera, emphasizing the sensual over-the-shoulder pose.

Long openwork black lace sleeves feature intricate patterns, realistic transparency, and finely detailed fabric texture.

The clothing is sophisticated, feminine, dark, and perfectly coordinated with the dramatic Halloween makeup.

LIGHTING AND ATMOSPHERE

Warm, harsh directional flash lighting illuminates the woman's face, hair, exposed shoulder, raised hand, and intricate makeup.

The lighting creates pronounced shadows on the wall behind her.

Strong but realistic highlights emphasize the natural skin texture, glossy nails, individual hair strands, and the dimensionality of the makeup.

The background is a dark, atmospheric interior with minimal distracting details.

Deep shadows enhance the dramatic Halloween mood.

The warm flash lighting creates a cinematic contrast between the woman's naturally illuminated skin and the intense black-and-orange makeup.

Natural skin texture, visible pores, realistic highlights, and detailed cosmetic pigments must remain clearly visible.

No excessive smoothing, plastic-looking skin, or artificial beauty filters.

CAMERA AND COMPOSITION

Professional close-up Halloween beauty portrait with natural perspective.

The woman's recognizable face is the main focal point.

The composition emphasizes the over-the-shoulder pose, exposed shoulder in the foreground, slightly raised head, direct gaze, and raised hand near the chin.

The long natural hair, dramatic black-and-orange eye makeup, triangular pumpkin nose, graphic jack-o'-lantern smile, pointed black neck details, and glossy stiletto nails are clearly visible.

Sharp focus on the eyes, facial features, intricate makeup details, and raised hand.

Cinematic flash photography with realistic skin texture, detailed hair strands, sophisticated dark color grading, and maximum photorealism.

High-resolution luxury Halloween beauty photography.

MAIN PRIORITY

Maximum preservation of the woman's recognizable facial identity, natural skin tone, original eye color, and original hair color and length.

Long, predominantly straight loose hair with a soft center part.

Dramatic matte orange-terracotta eyeshadow, elongated black smoky eyes, sharp winged eyeliner, long black eyelashes, and pointed black triangles beneath the eyes.

A matte-black inverted triangular pumpkin nose and an enormous graphic jack-o'-lantern smile featuring alternating sharp black triangular teeth across the cheeks.

Long pointed black makeup elements extending from the chin down the neck.

A sensual over-the-shoulder pose with one exposed shoulder close to the camera, direct eye contact, one hand raised toward the chin, extremely long glossy black-and-orange stiletto nails, black off-the-shoulder clothing with openwork lace sleeves, warm directional flash lighting, pronounced shadows, and a dark atmospheric interior.`,

  negative: `Wrong identity, blended identity, generic AI face, altered facial features, changed head shape, changed facial oval, changed eye shape, changed eyebrows, changed nose, changed lips, altered cheekbones or chin, changed age, changed skin tone, changed eye color, idealized face, copied face from reference model, excessive beautification, unrecognizable woman,

Changed original hair color, dyed hair, artificial hair color, incorrect natural hair shade, copied reference model hair color, short hair, significantly altered hair length, curly hair, elaborate updo, ponytail, braids, buns, artificial wig, missing center part, unrealistic hair texture,

Missing orange eyeshadow, incorrect eyeshadow color, missing black smoky eyes, missing elongated eyeliner, short eyeliner wings, missing thick eyelashes, missing black triangles beneath the eyes, incorrectly shaped eye triangles, altered eye anatomy,

Missing pumpkin nose, incorrect nose makeup, red clown nose, physical prosthetic nose, oversized nose, missing matte-black inverted triangle, distorted nose anatomy,

Missing jack-o'-lantern smile, ordinary lipstick, red lipstick, glossy black lips, missing black zigzag mouth line, missing triangular teeth, rounded teeth, realistic exposed teeth replacing painted teeth, incorrect pumpkin smile shape, poorly defined black makeup, missing alternating triangular teeth, altered jaw shape, distorted mouth, real wounds, torn skin, gore, excessive blood,

Missing black pointed makeup elements beneath the chin, incorrect neck makeup, excessive fantasy mutations, altered neck anatomy,

Incorrect pose, frontal body position, looking away from camera, missing over-the-shoulder pose, incorrect head rotation, unnatural neck curvature, missing exposed shoulder, rigid posture, missing raised hand, hand covering the face, fingers obscuring the pumpkin smile,

Short nails, rounded nails, square nails, missing stiletto manicure, incorrect nail colors, missing black-and-orange nail art, oversized unrealistic nails, malformed nails, extra nails, extra fingers, missing fingers, fused fingers, distorted hands, incorrect joints, unnatural finger positions,

Missing black off-the-shoulder outfit, incorrect clothing color, covered shoulders, missing openwork lace sleeves, incorrect lace texture, bulky clothing, distracting accessories, tattoos, glasses,

Bright background, colorful background, outdoor setting, neon lighting, colored glow, flat lighting, missing wall shadows, incorrect flash lighting, excessive darkness obscuring the face, overexposed skin,

Plastic-looking skin, waxy skin, poreless skin, excessive skin smoothing, excessive retouching, artificial beauty filters, CGI, 3D render, anime, cartoon, illustration, fisheye effect, wide-angle distortion, distorted anatomy, blurry face, low resolution, low quality, inscriptions, logos, watermarks, duplicated woman, extra people, AI artifacts.`
},

{
  id: "062",
  title: "Leopard Instinct",
  image: "prompt-062.PNG",

  positive: `Use the uploaded photograph of the woman as the ONLY source of her appearance. Strictly preserve her individual facial features, head shape, facial oval, eye shape, eyebrows, nose, lips, cheekbones, chin, natural asymmetry, age, skin tone, eye color, and original hair color. Do not alter or idealize her appearance. Do not copy the appearance of the model from the reference image. The woman must remain maximally recognizable even under elaborate feline Halloween makeup.

Create an ultra-realistic close-up beauty portrait of a young adult woman in a luxurious feline and leopard Halloween glam aesthetic. Professional high-fashion beauty photography featuring dramatic elongated cat-eye makeup, realistic leopard face paint, sophisticated animal-print accessories, warm directional flash lighting, and maximum photorealism.

HAIRSTYLE

The hair is styled into a high, voluminous, slightly messy bun at the back of the head.

The bun has realistic density, soft volume, and a naturally tousled texture, with individual strands visible.

The front section features a deep side part and is softly swept backward, maintaining subtle volume at the roots.

Several long, thin strands fall loosely around the face and neck, creating an effortless and feminine silhouette.

The hairstyle looks professionally styled but naturally textured, without excessive stiffness or artificial volume.

Strictly preserve the woman's natural hair color from the uploaded photograph.

Do not dye, recolor, highlight, or replace the original hair shade.

The original hair color must remain unchanged in the bun, at the roots, and in every loose strand.

MAKEUP — LUXURY FELINE GLAM

Luxurious, predatory feline glam makeup inspired by the elegance and intensity of a wild leopard.

The eyes appear dramatically elongated and almond-shaped through extremely long, sharp black winged eyeliner extending far toward the temples.

The elongated feline effect is created exclusively through makeup, without changing the woman's natural eye anatomy.

The inner corners of the eyes are also elongated with thin, precise graphic black lines extending toward the bridge of the nose, creating a pronounced cat-eye effect.

The upper eyelids feature softly blended warm brown-beige eyeshadow, with a lighter shade beneath the eyebrows.

The lower lash line is intensely defined with deep black kohl eyeliner and softly smudged for a dramatic smoky effect.

Extremely long, thick black eyelashes create an expressive feline gaze, with extra emphasis on the outer corners.

The woman's original eye shape, placement, and eye color must remain recognizable.

The eyebrows retain their natural shape and color, appearing neatly groomed and softly defined.

LEOPARD FACE PAINT

Numerous realistic leopard spots of varying sizes cover the forehead, temples, and upper cheeks.

The spots consist of irregular dark-brown and black rosettes with soft, slightly blurred edges.

Some markings form broken circular shapes, while others appear as small irregular spots, creating a realistic leopard-inspired pattern.

The spots are distributed naturally across the upper part of the face, following the contours of the forehead, temples, and cheekbones.

The markings must look like professionally applied artistic face makeup rather than natural skin pigmentation.

The leopard pattern is detailed, sophisticated, and clearly visible without obscuring the woman's recognizable facial features.

The skin between the spots retains its original natural tone and realistic texture.

FELINE NOSE AND LIPS

The tip of the nose is darkened with precise black-brown makeup, creating a neat, delicate feline nose.

The makeup follows the woman's real nose shape without changing its anatomical structure.

A single thin vertical black line extends from the center of the nose down to the upper lip.

The line is delicate, sharply defined, and painted directly onto the skin.

The lips retain their original natural shape and volume.

They are covered with matte nude-brown lipstick featuring a darker, sharply defined lip contour.

The center of the lips is slightly lighter, creating subtle dimension without an exaggerated glossy effect.

The cheekbones are emphasized with warm bronzer, while the skin has a soft satin glow.

Natural pores, fine skin texture, and realistic facial details remain visible.

POSE AND EXPRESSION

An extreme close-up beauty portrait emphasizing the woman's recognizable face and intricate feline makeup.

Her head is turned slightly to the side, with the chin gently lowered.

Her eyes look sideways and slightly upward, creating an intense, predatory feline gaze.

The expression is mysterious, confident, seductive, and elegant.

Her lips are slightly parted.

One hand is raised gracefully toward her mouth.

The index finger gently touches the lower lip, emphasizing the dramatic manicure and intimate beauty pose.

Her fingers are naturally curved and anatomically correct.

The hand is positioned elegantly without obscuring the eyes, nose, leopard face paint, or other important makeup details.

The head, neck, shoulders, hand, and fingers retain natural feminine proportions.

ACCESSORIES AND NAILS

The woman wears long, semi-transparent gloves featuring a realistic leopard-print pattern.

The fabric is delicate, sheer, and finely textured, allowing subtle visibility of the skin beneath.

The gloves fit naturally around the fingers, hands, and arms without creating bulky or distorted shapes.

Her nails are extremely long, sharply pointed stiletto nails.

The manicure features a glossy leopard-print design with intricate dark-brown and black markings.

Each nail has a realistic shape, consistent proportions, and a precisely pointed tip.

The nails are clearly visible near the woman's lips.

Around her neck is a narrow, semi-transparent leopard-print scarf-choker.

The scarf is wrapped snugly and elegantly around the neck, with realistic folds and delicate fabric transparency.

Gold hoop earrings complete the luxurious feline styling.

The earrings have a polished metallic finish with realistic reflections.

The overall accessories are coordinated, sophisticated, and visually harmonious.

LIGHTING AND BACKGROUND

Warm directional flash lighting illuminates the woman's face, hair, raised hand, and intricate makeup.

The flash creates expressive highlights on the cheekbones, nose, glossy leopard-print nails, gold hoop earrings, and natural skin.

Deep cinematic shadows add intensity and dimension to the portrait.

The background is neutral and dark, without distracting objects or bright decorations.

The lighting emphasizes the precision of the elongated eyeliner, the texture of the leopard face paint, and the fine details of the accessories.

The woman's skin retains its original natural tone and visible pores.

Soft satin highlights enhance the complexion without excessive smoothing or plastic-looking retouching.

The atmosphere is sensual, luxurious, mysterious, and cinematic.

CAMERA AND COMPOSITION

Professional extreme close-up beauty photography with natural portrait perspective.

The woman's face is the main focal point.

The composition emphasizes the elongated feline eyeliner, leopard spots across the forehead and cheeks, dark feline nose, matte nude-brown lips, and raised index finger touching the lower lip.

The high messy bun, loose face-framing strands, leopard-print gloves, glossy stiletto nails, scarf-choker, and gold hoop earrings are visible within the composition.

Sharp focus on the woman's eyes, facial features, intricate makeup, and detailed manicure.

Natural skin texture with visible pores, realistic individual hair strands, delicate fabric textures, and carefully controlled flash highlights.

Professional luxury Halloween beauty photography, sophisticated warm color grading, high resolution, and maximum photorealism.

MAIN PRIORITY

Maximum preservation of the woman's recognizable facial identity, original skin tone, natural eye color, and original hair color.

A high voluminous slightly messy bun with a deep side part and loose face-framing strands.

Extremely elongated black cat-eye eyeliner with sharp outer wings and precise inner-corner extensions, warm brown-beige eyeshadow, dramatic eyelashes, and intense black lower eyeliner.

Realistic dark-brown and black leopard rosettes across the forehead, temples, and upper cheeks.

A delicate black-brown feline nose, one thin vertical line extending to the upper lip, matte nude-brown lips with dark contouring, and softly bronzed satin skin.

A predatory sideways-and-upward gaze, slightly lowered chin, raised index finger touching the lower lip, extremely long glossy leopard-print stiletto nails, semi-transparent leopard gloves, matching scarf-choker, gold hoop earrings, warm directional flash lighting, deep shadows, and a neutral dark background.`,

  negative: `Wrong identity, blended identity, generic AI face, altered facial features, changed head shape, changed facial oval, changed eye shape, changed eyebrows, changed nose, changed lips, altered cheekbones or chin, changed age, changed skin tone, changed eye color, idealized face, copied face from reference model, excessive beautification, unrecognizable woman,

Changed original hair color, dyed hair, artificial hair color, incorrect natural hair shade, copied reference model hair color, missing bun, low bun, two buns, tight flat bun, oversized artificial bun, loose long hairstyle instead of bun, missing deep side part, center part, missing loose face-framing strands, artificial wig, unrealistic hair texture,

Missing cat-eye eyeliner, short eyeliner wings, rounded eyeliner, incorrect eyeliner direction, missing inner-corner extensions, altered eye anatomy, artificially elongated eyeballs, missing black lower eyeliner, missing long eyelashes, incorrect eyeshadow color, excessive colorful eye makeup,

Missing leopard face paint, incorrect leopard pattern, perfectly circular spots, evenly repeated identical spots, animal fur growing from the face, natural freckles replacing leopard spots, leopard markings covering the entire face, blurred or poorly defined markings, incorrect spot colors, artificial skin pigmentation, distorted facial features,

Missing feline nose, incorrect nose makeup, oversized black nose, physical animal nose, prosthetic nose, altered nose anatomy, missing thin vertical line between nose and upper lip, multiple vertical lines, incorrect line placement,

Incorrect lipstick color, bright red lips, glossy pink lips, excessively glossy lips, artificially enlarged lips, distorted mouth, altered lip shape, missing dark nude-brown lip contour,

Incorrect pose, frontal straight-ahead gaze, looking directly into camera instead of sideways, looking downward, missing slightly upward gaze, incorrect head angle, raised chin, rigid expression, missing raised hand, missing index finger touching lower lip, hand covering important makeup,

Short nails, rounded nails, square nails, missing stiletto manicure, missing leopard nail art, incorrect nail colors, oversized unrealistic nails, malformed nails, extra nails, fused nails, extra fingers, missing fingers, broken fingers, distorted hands, incorrect joints, unnatural finger positions,

Missing leopard-print gloves, opaque bulky gloves, incorrect glove pattern, missing sheer fabric texture, missing leopard scarf-choker, oversized scarf, incorrect scarf color, missing gold hoop earrings, oversized earrings, distracting jewelry, tattoos, glasses,

Bright background, colorful background, outdoor setting, neon lighting, colored glow, flat lighting, missing cinematic shadows, incorrect flash lighting, overexposed face, excessively dark face, artificial skin highlights,

Plastic-looking skin, waxy skin, poreless skin, excessive skin smoothing, excessive retouching, artificial beauty filters, CGI, 3D render, anime, cartoon, illustration, fisheye effect, wide-angle distortion, distorted anatomy, blurry face, low resolution, low quality, inscriptions, logos, watermarks, duplicated woman, extra people, AI artifacts.`
},
  
{
  id: "063",
  title: "Skeleton Lovers",
  image: "prompt-063.PNG",

  positive: `Create an ultra-realistic Halloween couple portrait of an adult man and woman standing closely together indoors, captured with a candid direct-flash smartphone photography aesthetic.

IDENTITY PRESERVATION — CRITICALLY IMPORTANT

If identity photographs are supplied, use them as the ONLY sources of the subjects' individual appearances.

Strictly preserve the man's and woman's exact recognizable identities, facial features, head shapes, facial ovals, eye shapes, eyebrows, noses, lips, cheekbones, chins, natural asymmetry, ages, skin tones, original eye colors, and natural hair characteristics.

Preserve each person's original hair color, hairline, hair texture, and recognizable hairstyle as closely as possible.

Do not mix, swap, blend, or alter their facial identities.

Do not replace either person's face with the face of a model from a composition reference.

Both subjects must remain recognizable beneath the elaborate Halloween makeup.

COMPOSITION AND POSE

Recreate a natural, intimate Halloween couple portrait.

The adult man stands on the LEFT side of the frame.

The adult woman stands on the RIGHT side of the frame.

Their bodies are positioned closely together, creating a relaxed and affectionate couple composition.

The man casually wraps one arm around the woman's shoulders.

His arm rests naturally across her upper back and shoulder area without distorting either person's anatomy.

Both subjects face the camera directly.

Their expressions are serious, confident, calm, and slightly mysterious.

Neither subject is smiling broadly.

The composition frames both people approximately from the upper thighs upward.

Both faces, necks, shoulders, leather jackets, and important clothing details must remain clearly visible.

The pose should feel spontaneous and natural rather than stiff or artificially staged.

HALLOWEEN MAKEUP — REALISTIC SKELETAL BODY PAINT

Both the man and woman wear detailed black-and-white skeletal Halloween makeup covering their faces and necks.

The makeup creates a convincing theatrical skull illusion while preserving each person's recognizable facial anatomy.

Dark black pigment surrounds the eyes, creating the appearance of hollow skull eye sockets.

The eye makeup follows the natural contours of each person's eyes without altering their real eye shapes.

Black skeletal nose details create the illusion of a skull's nasal cavity.

Realistic painted skull teeth extend across the lips and outward onto the cheeks.

The painted teeth are individually defined with believable shapes, shading, and spacing.

Black shadows between the painted teeth create depth and dimension.

White and gray highlights imitate the contours of a human skull.

The makeup includes carefully painted cheekbone structures, jaw details, and dark hollow areas.

The skeletal design continues naturally down both necks.

Painted vertebrae, bone structures, and dark shadowed spaces create the illusion of an exposed skeletal neck.

The face and neck makeup must remain visually connected, detailed, and anatomically believable.

The skeletal elements are clearly theatrical cosmetic body paint applied over intact, healthy skin.

There are no real exposed bones, open wounds, injuries, or gore.

The makeup should look professionally applied but realistic enough for an authentic Halloween party photograph.

MAN'S CLOTHING

The man wears a black leather jacket with a realistic slightly worn texture.

The jacket has natural folds, visible seams, realistic stitching, and subtle reflections from the camera flash.

Underneath the jacket, he wears a dark red-and-black shirt.

The shirt is partially visible through the open front of the leather jacket.

He wears fitted black pants with a natural, realistic fit.

The outfit is masculine, casual, dark, and coordinated with the Halloween aesthetic.

Preserve the man's natural body proportions, shoulder width, arm length, and physique.

Do not exaggerate his muscles or change his recognizable body shape.

WOMAN'S CLOTHING

The woman wears a fitted black top beneath a cropped black leather biker jacket.

The biker jacket features realistic leather texture, structured lapels, metallic details, visible stitching, and natural folds.

She wears high-waisted black shorts that fit naturally around her waist and hips.

Subtle black thigh straps complete the outfit.

The straps are understated, realistic, and correctly positioned on the upper thighs.

The woman's silhouette remains feminine, natural, and anatomically proportionate.

Her shoulders, waist, hips, legs, and arms must retain realistic proportions.

Do not exaggerate her curves, enlarge her hips, broaden her shoulders, or alter her natural anatomy.

TATTOOS — STRICT REFERENCE ACCURACY

Include tattoos ONLY if they are clearly present in the supplied identity photographs.

If the subjects have tattoos in their identity photographs, preserve their actual placement, scale, and recognizable design as accurately as possible.

Do not invent new tattoos.

Do not copy tattoos from a separate composition reference.

If no tattoos are visible in the identity photographs, do not add any tattoos.

BACKGROUND — CASUAL INDOOR HALLOWEEN SNAPSHOT

The setting is a simple indoor residential environment.

Cream-colored walls create a neutral, warm background.

White paneled interior doors are visible behind the couple.

The environment resembles an ordinary home or apartment during a casual Halloween gathering.

Warm ambient indoor lighting provides subtle background illumination.

The background is authentic, understated, and slightly imperfect.

Avoid elaborate haunted-house decorations, theatrical scenery, professional studio backdrops, or excessive props.

The emphasis remains on the couple and their skeletal Halloween makeup.

LIGHTING AND PHOTOGRAPHIC STYLE

Strong frontal camera flash illuminates both subjects.

The lighting resembles a spontaneous photograph captured with a smartphone or compact digital camera.

The flash produces slightly harsh highlights on the faces, leather jackets, and exposed skin.

Deep but natural shadows appear behind the couple and around the contours of their clothing.

Warm ambient room lighting remains visible in the background.

Subtle vintage digital-camera grain adds authenticity.

The image should feel candid, intimate, and spontaneous rather than excessively polished.

Natural skin texture remains visible beneath and around the theatrical makeup.

The leather jackets display realistic reflections, folds, and surface texture.

The makeup has believable pigment density, slight texture, and realistic blending.

CAMERA AND FRAMING

A straightforward frontal camera angle with natural human proportions.

Both subjects stand close to the camera while remaining naturally proportioned.

The framing extends approximately from the upper thighs to above both heads.

The man's arm around the woman's shoulders is clearly visible.

Both faces and the detailed skeletal neck makeup remain important focal points.

Slightly imperfect framing enhances the casual party snapshot aesthetic.

Natural perspective without wide-angle distortion or exaggerated foreground proportions.

Realistic depth, detailed facial makeup, authentic leather textures, and natural indoor lighting.

Ultra-photorealistic Halloween couple photography with high detail and subtle digital-camera grain.

MAIN PRIORITY

Maximum preservation of both subjects' individual facial identities, natural appearance, original hair colors, and realistic anatomy.

The man stands on the left and the woman on the right, close together, with his arm casually wrapped around her shoulders.

Both wear intricate black-and-white skeletal face and neck makeup featuring hollow eye sockets, painted skull teeth, skeletal nose details, and painted neck vertebrae.

The man wears a black leather jacket over a dark red-and-black shirt with fitted black pants.

The woman wears a cropped black leather biker jacket, fitted black top, high-waisted black shorts, and subtle black thigh straps.

Simple cream-colored residential walls, white paneled doors, warm ambient lighting, strong frontal flash, realistic shadows, subtle vintage grain, and an authentic candid Halloween party atmosphere.`,

  negative: `Real exposed skull, exposed bone, real skeletal anatomy visible through skin, gore, open wounds, graphic injury, blood-covered face, zombie decay, rotting flesh, monster face, horror mutations, torn skin,

Altered identity, mixed identities, swapped faces, blended facial features, generic AI faces, copied faces from reference models, changed facial anatomy, changed eye shape, changed nose, changed lips, altered facial oval, changed skin tone, changed age, changed original hair color, artificial hair color, excessive beautification, unrecognizable subjects,

Copied tattoos, random tattoos, invented tattoos, tattoos copied from composition reference, incorrect tattoo placement, incorrect tattoo design,

Missing skeletal makeup, incomplete skull makeup, distorted skull makeup, incorrect skull teeth, missing painted teeth, uneven tooth placement, asymmetrical makeup, missing hollow eye makeup, missing skeletal nose details, missing neck makeup, missing painted vertebrae, unrealistic bone shapes, actual exposed bones instead of body paint,

Cartoon, illustration, anime, CGI, 3D render, plastic skin, waxy skin, excessive retouching, artificial skin smoothing, beauty filters, unrealistic makeup texture,

Distorted faces, incorrect anatomy, oversized heads, tiny heads, unnatural necks, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrect joints, twisted limbs, duplicate people, extra people, missing person,

Exaggerated muscles, unnaturally broad male shoulders, broad female shoulders, exaggerated female hips, unnaturally narrow waist, unrealistic bust, shortened torso, incorrect body proportions, distorted legs, unnatural pose,

Man on the right, woman on the left, reversed positions, subjects standing far apart, missing arm around shoulders, incorrect embrace, unnatural arm placement, stiff studio pose, exaggerated facial expressions, broad smiles,

Missing black leather jackets, incorrect jacket material, missing dark red-and-black shirt, missing fitted black pants, missing cropped biker jacket, missing black fitted top, missing high-waisted shorts, missing thigh straps, cosplay armor, fantasy armor, elaborate costumes,

Theatrical studio background, haunted castle, graveyard, outdoor setting, elaborate horror scenery, excessive Halloween props, dramatic colored spotlights, neon lighting, artificial cinematic fog, overly polished fashion studio lighting,

Masks covering the faces, full-face plastic skull masks, prosthetic skull heads, face-obscuring accessories,

Missing frontal flash, flat lighting, excessive beauty lighting, unrealistic reflections, overexposed faces, excessively dark faces, extreme contrast hiding makeup details,

Fisheye effect, wide-angle distortion, exaggerated perspective, extreme low-angle photography, excessive blur, motion blur, low resolution, low quality, artificial sharpness, text, watermark, logo, inscriptions, duplicated limbs, AI artifacts.`
},

{
  id: "064",
  title: "Pennywise Together",
  image: "prompt-064.PNG",
  imagePosition: "center 0%",

  positive: `Use the uploaded photographs of the man and woman as the ONLY sources of their appearance. Strictly preserve their real facial features, head shapes, facial ovals, eyes, eyebrows, noses, lips, cheekbones, chins, ages, natural facial asymmetry, skin tones, eye colors, and original hair colors.

Do not alter their appearance or idealize their faces. Both individuals must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic Halloween fashion photograph of an adult couple styled as female and male versions of Pennywise from the horror movie It.

Professional realistic full-body photography. The composition, poses, costumes, and lighting must match the reference as closely as possible.

POSE AND COMPOSITION

The woman stands on the LEFT, and the man stands on the RIGHT, next to each other against a concrete-block wall.

Both face the camera and hold hands between them.

The woman stands in a bold pose with her legs spread wide apart and one knee slightly bent.

Her torso is almost frontal, her head is slightly turned to the right, and her gaze is directed to the side.

One arm is lowered, holding the man's hand, while her other arm is positioned naturally near her thigh, with her free hand lightly holding or touching the ribbon of her balloon.

The man stands upright with his feet shoulder-width apart and his torso facing the camera.

His head is straight, his gaze is directed into the lens, and his facial expression is cold and mysterious.

He holds the woman's hand with one hand and a thin red balloon ribbon with the other.

One large red helium balloon floats above each person.

The balloons are positioned in the upper part of the frame, at slightly different heights, with their long red ribbons hanging naturally downward.

The pose must look confident, natural, balanced, and physically realistic.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the real proportions of both individuals.

Their heads must be normally sized, shoulders naturally proportioned, torsos anatomically correct in length, and arms and legs proportionate to their bodies.

The man has a natural masculine physique, without excessively broad shoulders or artificially enlarged muscles.

The woman has a harmonious feminine figure, delicate shoulders, a defined but natural waist, and a full size 4 bust, proportionate to her rib cage.

The corset supports her bust without unnatural enlargement or deformation.

The woman's legs are long and natural, without excessive elongation.

Her hips, thighs, knees, and calves remain proportionate to her torso.

Hands and fingers must have correct anatomical shapes.

The couple's joined hands must connect naturally, with believable finger placement and correct wrist and elbow positions.

No extra limbs, incorrect joints, distorted anatomy, or unnaturally stretched bodies.

HAIR — MAN

The man's hair must strictly retain its original natural color from his uploaded photograph.

His hair is styled in a voluminous, slightly messy hairstyle with a lifted top section.

The hairstyle has natural texture, realistic individual strands, and believable volume.

Do not alter his natural hairline, original hair shade, or recognizable hair characteristics.

HAIR — WOMAN

The woman's hair is long and thick, strictly retaining its original natural color.

Her hair is parted in the center and styled into two high ponytails on either side of her head.

The ponytails are voluminous, with soft, slightly messy waves falling freely over her shoulders and chest.

The hair has realistic texture, individual strands, and natural movement.

Do not change her original hair shade, hairline, or recognizable hair characteristics.

MAKEUP — PENNYWISE-INSPIRED HALLOWEEN GLAM

Both individuals wear professional theatrical Halloween makeup inspired by Pennywise.

A pale white makeup base covers the face while preserving natural skin texture and recognizable facial anatomy.

Deep black-gray shadows surround the eyes, creating a dark, mysterious clown appearance.

The eyebrows remain expressive and recognizable beneath the makeup.

The tips of the noses are darkened with theatrical clown makeup.

Thin, curved red lines extend from the corners of the mouth upward across the cheeks toward the eye area.

These precise red lines create the characteristic sinister Pennywise-inspired clown smile.

The lips are covered with rich dark-red lipstick.

All makeup elements are artistic theatrical effects applied over intact, healthy skin.

The makeup must not replace, distort, or conceal the subjects' individual facial identities.

WOMAN'S MAKEUP

The woman's makeup is a glamorous interpretation of the Pennywise aesthetic.

Expressive black-gray smoky eyes emphasize her natural eye shape.

Long, thick eyelashes create a dramatic beauty effect.

Sharp, defined black winged eyeliner extends outward from the eyes.

Soft cheekbone contouring adds dimension while preserving her original facial proportions.

Her lips are covered with rich dark-burgundy lipstick.

The characteristic curved red clown lines are clearly visible.

The white makeup base remains realistic, with natural texture and subtle tonal variations.

MAN'S MAKEUP

The man's makeup is darker and more sinister.

Deep black-gray shadows emphasize the eye sockets without changing his real eye shape.

The curved red clown lines are sharply defined and extend upward from the mouth toward the eyes.

His nose tip is darkened, and his lips are colored deep red.

The makeup creates a frightening theatrical clown effect while keeping his original facial features recognizable.

WOMAN'S CLOTHING — WHITE PENNYWISE CORSET COSTUME

The woman wears a short white clown costume featuring a fitted strapless corset.

The corset is made from dense white fabric with shaped cups, vertical boning, decorative seams, and carefully structured panels.

Small bright-red pompoms are arranged vertically along the center of the corset.

The corset follows her natural feminine anatomy, supporting her full bust without excessive enlargement or distortion.

Around her waist is a short, voluminous white tutu skirt.

The skirt consists of multiple layers of semi-transparent white tulle, creating an airy, full silhouette.

The tulle has realistic transparency, delicate folds, and softly layered fabric texture.

A small white pleated ruff collar surrounds her neck.

She wears long, fitted white gloves extending above the elbows, with decorative lace details at the ends.

On her legs are black fine-mesh fishnet tights.

The fishnet pattern is consistent, realistic, and clearly visible.

She wears tall white platform boots with chunky soles, black laces, and round red pompoms on the front.

The boots have realistic proportions, visible material texture, and natural contact with the ground.

The entire outfit is stylish, feminine, theatrical, and inspired by a modern Pennywise Halloween interpretation.

MAN'S CLOTHING — WHITE PENNYWISE COSTUME

The man wears an entirely white clown costume inspired by a modern interpretation of Pennywise.

A loose white long-sleeved shirt with a classic collar forms the main part of the costume.

Three bright-red round pompoms are arranged vertically down the center of the chest.

Around his neck is a large, multilayered white pleated ruff collar.

The ruff collar features thin black edging and realistic structured fabric folds.

He wears straight-cut classic white trousers.

The trousers fit naturally and maintain realistic leg proportions.

White gloves with decorative lace cuffs cover his hands.

He wears white sneakers featuring small red details.

The costume fabric is dense, slightly matte, and features natural folds, seams, and realistic texture.

The man's outfit is elegant, theatrical, and visually coordinated with the woman's costume.

RED BALLOONS — EXACTLY TWO

Exactly TWO large, bright-red, glossy, teardrop-shaped helium balloons.

One balloon floats above the woman on the LEFT.

The second balloon floats above the man on the RIGHT.

The balloons are positioned at different heights, matching the reference composition.

A thin red ribbon extends downward from each balloon.

The man's balloon ribbon hangs near his right hand and is held naturally.

The woman's free hand lightly holds or touches the ribbon of her balloon.

Both ribbons are thin, realistic, and clearly connected to their respective balloons.

The balloons have realistic rounded teardrop shapes, smooth glossy surfaces, and soft white light reflections.

Their size is believable relative to the couple.

Both balloons must remain completely visible.

Do not add any extra balloons.

BACKGROUND AND ATMOSPHERE

A simple outdoor location beside a large wall constructed from rectangular concrete blocks in various shades of gray.

The wall features horizontal bands of dark-gray and light-gray blocks.

Visible seams and a rough concrete surface create an authentic urban texture.

A flat gray concrete surface is visible beneath the couple's feet.

The background is minimal, neutral, and free from distracting objects.

No trees, buildings, cemeteries, smoke, candles, or additional Halloween decorations.

The atmosphere resembles a stylish modern Halloween fashion photoshoot.

The composition emphasizes the contrast between the clean white clown costumes, cool gray concrete background, and saturated bright-red balloons.

LIGHTING AND COLOR GRADING

Soft natural daylight evenly illuminates both faces, costumes, balloons, and the concrete-block wall.

Moderate shadows create realistic depth without harsh contrast.

The white clothing retains natural texture, folds, and subtle shadow details.

The red balloons and pompoms remain bright and saturated.

Slightly muted professional color grading emphasizes cool gray background tones, natural skin tones beneath the theatrical makeup, clean white clothing, and vivid red accents.

No red lighting, neon, colored spotlights, fire, or artificial glowing effects.

The lighting must remain realistic, soft, and consistent with an outdoor daytime fashion photograph.

CAMERA AND FRAMING

Professional full-body photograph of the couple.

The camera is positioned approximately at chest level, using a 50–70mm lens with natural perspective.

The woman occupies the LEFT half of the frame.

The man occupies the RIGHT half of the frame.

Both individuals are fully visible from the tops of their heads to their shoes.

The two red balloons float above them and must not be cropped by the upper edge of the image.

The frame clearly shows the couple's joined hands, complete costumes, the woman's tutu skirt, black fishnet tights, white platform boots, the man's white trousers and sneakers, long balloon ribbons, and the concrete wall.

Maintain sufficient distance from the couple to preserve realistic full-body proportions.

Do not stretch the figures, enlarge their heads, shorten their torsos, or distort their bodies.

Natural portrait perspective without wide-angle or fisheye distortion.

Professional realistic Halloween fashion photography, natural skin texture, detailed theatrical makeup, realistic fabrics, soft depth of field, high detail, and 8K quality.

MAIN PRIORITY

Maximum recognizability of both individuals from their uploaded photographs.

Strict preservation of their original eye colors, natural hair colors, facial features, and human proportions.

Accurate handholding pose with the woman on the LEFT and the man on the RIGHT.

The woman wears a short white corset costume with a voluminous tutu skirt, black fishnet tights, white platform boots, and two high wavy ponytails.

The man wears a white shirt with three red pompoms, a multilayered pleated ruff collar, straight white trousers, and white sneakers.

Both wear expressive Pennywise-inspired theatrical makeup.

Exactly two large glossy red helium balloons float above the couple.

A gray concrete-block wall, soft natural daylight, muted urban color grading, and a realistic full-body Halloween fashion composition complete the scene.`,

  negative: `Altered faces, incorrect identity, blended facial features, face swapping, generic AI faces, changed head shapes, changed eye shapes, changed noses, changed lips, changed cheekbones, changed chins, changed ages, changed skin tones, changed eye colors, changed original hair colors, excessive beautification, loss of facial resemblance,

Oversized heads, tiny heads, excessively broad shoulders, enlarged bust, artificially enlarged muscles, enlarged arms, enlarged hands, unnaturally tiny waist, shortened torsos, excessively elongated legs, deformed legs, oversized hips, incorrect joints, distorted anatomy, disproportionate body shapes,

Extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, incorrectly connected hands, unnatural handholding pose, twisted wrists, extra limbs, missing limbs,

Incorrect hairstyles, altered hairlines, artificial hair colors, wigs, missing woman's ponytails, low ponytails, single ponytail, incorrect ponytail placement, missing center part, incorrect man's hairstyle,

Incorrect clown makeup, missing pale makeup base, missing dark eye shadows, missing red clown lines, missing darkened nose tips, missing dark-red lipstick, distorted facial anatomy, makeup replacing real facial features, full-face masks, cartoon clown faces,

Incorrect costumes, missing white corset, incorrect corset color, missing structured cups, missing red pompoms, missing tutu skirt, flat skirt, missing tulle layers, missing black fishnet tights, incorrect tights color, missing platform boots, incorrect boot color, missing black boot laces, missing white gloves, missing lace details, missing pleated ruff collar,

Incorrect men's shirt, missing three red chest pompoms, incorrect men's trousers, missing white sneakers, incorrect costume fabric, fantasy armor, excessive costume accessories,

Missing balloons, additional balloons, one balloon, three balloons, more or fewer than two balloons, incorrectly positioned balloons, cropped balloons, partially visible balloons, missing ribbons, disconnected ribbons, oversized balloons, tiny balloons, incorrectly colored balloons, heart-shaped balloons,

Incorrect couple positioning, woman on the right, man on the left, reversed subjects, missing handholding pose, subjects standing far apart, incorrect arm positions, unnatural poses, incorrect full-body framing, cropped feet, cropped shoes, cropped heads,

Trees, buildings, cemeteries, smoke, candles, additional Halloween decorations, weapons, blood, gore, extra people, distracting objects, incorrect background, indoor setting, theatrical studio backdrop,

Red lighting, neon lighting, colored spotlights, fire, artificial glow, overly dramatic shadows, harsh artificial lighting, excessive darkness, extreme contrast,

Wide-angle distortion, fisheye effect, stretched bodies, exaggerated perspective, CGI, 3D render, anime, cartoon, illustration, plastic-looking skin, waxy skin, excessive skin smoothing, unrealistic fabric textures, tattoos, glasses, inscriptions, logos, watermarks, blur, low resolution, low quality, AI artifacts.`
},

{
  id: "065",
  title: "Joker & Harley Love",
  image: "prompt-065.PNG",
  imagePosition: "center 10%",

  positive: `Use the uploaded photographs of the man and woman as the ONLY sources of their appearance. Strictly preserve their real facial features, head shapes, facial ovals, eyes, eyebrows, noses, lips, cheekbones, chins, ages, natural facial asymmetry, skin tones, eye colors, and original hair colors.

Do not alter their appearance or idealize their faces. Both individuals must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic Halloween fashion photograph of an adult couple styled as the Joker and Harley Quinn from the DC universe.

The scene is a realistic mirror selfie taken in an ordinary home interior. The composition, poses, makeup, clothing, lighting, and atmosphere must match the reference as closely as possible.

POSE AND COMPOSITION

The woman stands in the foreground, near the center of the frame, slightly to the right of the man, photographing their reflection in a large wall-mounted mirror.

Her torso faces the mirror almost directly.

Her head is slightly turned to the right, and her gaze is directed toward the smartphone screen.

Her right hand is raised near her face, holding the smartphone vertically.

Her left arm hangs naturally along her body.

The man stands directly behind the woman, slightly to her left, pressing close against her back.

His head is positioned near her left shoulder.

His gaze is directed toward the woman's reflection.

One arm wraps naturally around her waist from the front.

His palm rests on her abdomen over the corset, with realistic finger placement and anatomically correct hand proportions.

His other arm is partially concealed behind her body.

The couple's bodies remain close together, creating a natural, intimate, slightly rebellious, and romantic pose.

Their expressions are confident, mysterious, and subtly provocative.

The pose must resemble a genuine spontaneous couple selfie rather than a staged professional photoshoot.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the real proportions of both individuals.

Their heads must be normally sized, shoulders naturally proportioned, torsos anatomically correct in length, and arms and hands proportionate to their bodies.

The man has a natural masculine physique without artificially enlarged shoulders or muscles.

The woman has a harmonious feminine figure, delicate shoulders, a natural waist, and a full bust proportionate to her rib cage.

The corset emphasizes her figure without enlarging her bust beyond its original proportions.

Her shoulders, rib cage, waist, hips, and arms remain anatomically correct.

The man's arm must wrap naturally around the woman's waist without intersecting her body or creating extra limbs.

His hand must rest correctly on the front of her corset, with five naturally positioned fingers.

The woman's smartphone-holding hand must have correct anatomy, realistic finger placement, and believable grip.

The smartphone must be realistically sized relative to her palm.

No enlarged hands, distorted joints, shortened torsos, exaggerated proportions, or unnatural body curvature.

HAIR — MAN

The man's hair strictly retains its original natural color from his uploaded photograph.

Short, thick, slightly tousled hair with natural volume.

The hairstyle has realistic individual strands, a believable hairline, and a softly disheveled texture.

Do not dye his hair green.

Do not change his original hair shade, hairline, or recognizable hair characteristics.

HAIR — WOMAN

The woman's hair is long and strictly retains its original natural color from her uploaded photograph.

Her hair is parted in the center and styled into two high ponytails on either side of her head.

The ponytails are voluminous, slightly messy, and styled in soft waves.

Several loose strands frame her face and fall naturally over her shoulders.

The hair has realistic density, natural movement, and clearly defined individual strands.

Do not change her original hair shade.

Do not copy Harley Quinn's traditional dyed hair colors.

The original hair color must remain unchanged in both ponytails, at the roots, and in every loose strand.

WOMAN'S MAKEUP — HARLEY QUINN

The woman wears dramatic professional Halloween makeup inspired by Harley Quinn.

Her skin appears light under the makeup while retaining her original natural skin tone and realistic texture.

Her eyebrows remain expressive and recognizable.

Black winged eyeliner emphasizes her natural eye shape.

Thick, long eyelashes create a dramatic beauty effect.

Softly blended dark eyeshadow surrounds the eyes.

On one temple, realistic theatrical makeup depicts a small reddish cut.

The effect is cosmetic and does not represent an actual injury.

Beneath the other eye are several small black decorative symbols and inscriptions in Harley Quinn's signature style.

These markings are carefully painted onto the skin as temporary theatrical makeup.

Her lips are covered with rich dark-burgundy lipstick.

Long, uneven red lines are painted from the corners of the mouth outward across the cheeks.

The lines create the illusion of a wide, sinister clown smile without altering her real lips, mouth, or jaw anatomy.

The makeup is slightly smudged but remains professionally executed, realistic, and highly detailed.

On the exposed upper chest is black temporary body art featuring chaotic handwritten inscriptions and playing cards with suit symbols.

The decorative markings appear as theatrical body paint applied directly onto the skin.

They are not permanent tattoos.

All makeup elements must preserve the woman's real facial features and recognizable identity.

MAN'S MAKEUP — THE JOKER

The man's face is covered with a white theatrical makeup base.

The makeup preserves the natural shape and realistic texture of his skin.

Deep, blended black shadows surround his eyes, creating a tired, unhinged, and mysterious gaze.

The dark eye makeup follows his natural eye anatomy without changing the original shape of his eyes.

Small reddish decorative cuts and thin dark symbols appear on his forehead and near one eye.

These are theatrical cosmetic details rather than actual injuries or permanent tattoos.

His lips are covered with smudged dark-red lipstick.

Long, uneven red lines extend from the corners of his mouth outward across his cheeks.

The red lines imitate the Joker's signature sinister smile.

His facial expression is cold, mysterious, confident, and slightly frightening.

Do not alter the real shape of his eyes, eyebrows, nose, lips, cheekbones, or jaw.

The makeup must remain clearly theatrical and preserve his individual facial identity.

WOMAN'S CLOTHING — HARLEY QUINN

The woman wears a fitted purple strapless corset.

The corset features a shaped upper edge, structured cups, vertical boning, decorative seams, and metal fastenings arranged vertically down the center.

The purple fabric has realistic texture, subtle highlights, and natural folds.

The corset emphasizes her natural waist and bust while preserving correct anatomical proportions.

Around her neck is a long dark-green satin necktie.

The necktie hangs loosely down the front of her chest, reaching toward the lower part of the corset.

The satin fabric has a soft sheen, realistic folds, and natural movement.

She wears short black shorts made from dense matte fabric.

The shorts fit naturally around her waist and hips.

The outfit is feminine, rebellious, stylish, and inspired by Harley Quinn's theatrical aesthetic.

MAN'S CLOTHING — THE JOKER

The man wears a white shirt with the upper buttons undone.

The shirt has a casually open collar and slightly disheveled appearance.

Natural fabric folds, visible seams, and realistic cotton texture are clearly rendered.

Over the shirt are narrow black suspenders running vertically down his chest.

The suspenders have realistic tension, width, and placement.

A small dark accessory is worn around his neck, partially concealed by the shirt collar.

His outfit looks slightly untidy but fashionable, creating a modern Joker-inspired appearance.

The clothing must fit his natural masculine physique without exaggerating his shoulders, chest, or arms.

BACKGROUND — REALISTIC HOME MIRROR SELFIE

The scene takes place in an ordinary home bathroom or small dressing room.

The couple stands in front of a large rectangular mirror with a wide white frame.

Behind them is an open doorway with warm beige-peach lighting.

Light-colored walls and a small visible section of furniture create an authentic residential atmosphere.

A light-gray wall is visible on the right side of the frame.

The edge of the mirror frame appears on the left.

The interior is simple, realistic, and slightly imperfect, resembling an ordinary home in the evening.

No additional Halloween decorations, candles, smoke, fantasy elements, or theatrical scenery.

The background must not distract from the couple.

LIGHTING AND COLOR GRADING

Ordinary indoor household lighting combines warm illumination from the adjacent room with slightly cool gray-blue light near the mirror.

Both faces are clearly visible.

The lighting creates soft, natural shadows and subtle reflections on the mirror surface.

Colors are slightly muted and realistic.

The photograph must look like a genuine evening smartphone selfie.

Subtle digital-camera grain, natural sharpness, realistic skin texture, and gentle reflections enhance authenticity.

The purple corset, dark-green necktie, white shirt, and theatrical makeup retain their natural colors.

No red studio lighting, neon lighting, harsh contrast, excessive post-processing, or artificial glowing effects.

CAMERA AND MIRROR FRAMING

A realistic mirror selfie framed from the tops of both heads to approximately the upper thighs.

The smartphone camera is positioned approximately at the woman's face level, slightly to the right of center.

The woman occupies the central and right portions of the frame.

The man stands closely behind her on the left.

Both heads, hairstyles, faces, shoulders, arms, the woman's corset and necktie, the upper portion of her black shorts, and the man's embrace must remain visible.

The smartphone is light-colored, featuring a dual-camera system.

It has a transparent case containing a small decorative photograph.

The phone is held vertically in the woman's right hand.

The phone partially obscures the space near the right side of the woman's face but does not cover her main facial features.

The mirror reflection must remain geometrically believable and physically consistent.

The subjects' positions, arm placement, hand positions, and smartphone orientation must look natural in the reflection.

Do not stretch the figures, distort the mirror perspective, enlarge the smartphone, or alter the size of the hands.

Professional ultra-realistic smartphone photography, natural skin texture, detailed theatrical makeup, realistic hair and fabrics, subtle digital-camera grain, soft household lighting, and maximum photorealism.

MAIN PRIORITY

Maximum recognizability of both individuals from their uploaded photographs.

Strict preservation of their original eye colors, natural hair colors, facial features, and human anatomy.

An accurate intimate mirror selfie pose, with the woman in the foreground holding a light-colored smartphone and the man embracing her from behind around her waist.

The man's hand rests naturally on the front of the woman's purple corset.

The woman wears a fitted purple strapless corset, a long dark-green satin necktie, and short black shorts.

The man wears a casually open white shirt with narrow black suspenders.

Both wear expressive Joker and Harley Quinn theatrical makeup, including dark eye makeup, sinister painted red smiles, and small decorative facial markings.

The woman's hair is styled into two high wavy ponytails while strictly preserving her original hair color.

The man retains his natural hair color and slightly tousled hairstyle.

A realistic home bathroom or dressing room, a large white-framed mirror, an open doorway with warm beige-peach lighting, subtle smartphone-camera grain, and soft household lighting complete the scene.`,

  negative: `Altered faces, incorrect identity, blended facial features, face swapping, generic AI faces, changed head shapes, changed eye shapes, changed noses, changed lips, changed cheekbones, changed chins, changed ages, changed skin tones, changed original eye colors, changed original hair colors, excessive beautification, loss of facial resemblance,

Oversized heads, excessively broad shoulders, artificially enlarged male muscles, enlarged breasts, oversized arms, oversized hands, unnaturally tiny waist, shortened torsos, distorted body proportions, unnatural spine curvature, exaggerated hips, unrealistic anatomy,

Extra fingers, extra hands, extra arms, extra limbs, missing fingers, fused fingers, malformed hands, malformed joints, incorrectly positioned arms, unnatural hand placement, intersecting limbs, duplicated wrists, floating hands, incorrect embrace,

Incorrect hairstyles, green hair on the man, altered hair colors, dyed ponytails, blue ponytails, pink ponytails, missing ponytails, incorrect ponytail placement, missing center part, artificial-looking hair, wigs, altered hairlines,

Incorrect Joker makeup, incorrect Harley Quinn makeup, missing white theatrical makeup on the man, missing dark eye shadows, missing red painted smiles, missing decorative facial markings, distorted facial anatomy, makeup replacing real facial features, full-face masks, actual open wounds, excessive blood, gore,

Real tattoos, permanent tattoos, invented tattoos, tattoo sleeves, glasses, plastic-looking skin, cartoonish styling, excessive beauty filters,

Incorrect clothing, missing purple corset, incorrect corset color, missing structured cups, missing metal fastenings, missing green necktie, incorrect necktie color, missing black shorts, missing white shirt, missing black suspenders, incorrect shirt collar, formal suit jacket, fantasy costumes,

Incorrect mirror selfie composition, incorrect positioning of the couple, man standing in front of the woman, woman standing behind the man, missing embrace, man not touching woman's waist, incorrectly positioned hand on corset, incorrectly positioned smartphone, oversized phone, extra smartphones, missing smartphone, incorrect phone orientation, distorted mirror reflections, impossible mirror geometry,

Additional Halloween decorations, candles, smoke, fantasy elements, weapons, excessive blood, extra people, duplicate couple, theatrical studio background, outdoor setting, haunted house scenery,

Red studio lighting, neon lighting, excessive contrast, artificial glow, harsh colored spotlights, heavy retouching, excessive darkness, overexposed faces,

CGI, 3D render, anime, cartoon, illustration, unnatural skin smoothing, waxy skin, fisheye distortion, extreme wide-angle perspective, stretched bodies, blurred faces, motion blur, low resolution, low quality, logos, watermarks, AI artifacts.`
},

{
  id: "066",
  title: "Eternal Skeleton Love",
  image: "prompt-066.PNG",
  imagePosition: "center 10%",

  positive: `Use the uploaded photographs of the man and woman as the ONLY sources of their appearance. Strictly preserve their real facial features, head shapes, facial ovals, eyes, eyebrows, noses, lips, cheekbones, chins, ages, natural facial asymmetry, skin tones, eye colors, and original hair colors.

Do not alter their appearance or idealize their faces. Both individuals must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult couple in love, styled as romantic gothic skeletons on the seashore at sunset.

Atmospheric professional photography with a composition, poses, clothing, makeup, and lighting matching the reference as closely as possible.

POSE AND COMPOSITION

The man stands on the LEFT, slightly behind the woman, pressing closely and gently against her.

His torso is slightly turned toward the woman, and his head is tilted toward her face.

He gently touches his lips to the area near her temple and upper cheek, as if giving her a tender romantic kiss.

The woman stands on the RIGHT in the foreground, with her head slightly turned to the left toward the man.

Her chin is slightly raised, her gaze is directed into the distance, and her facial expression is calm, mysterious, and romantic.

One of the woman's arms is raised and wrapped behind the man's neck.

Her fingers gently touch the back of his head.

Her other arm hangs naturally along her body and is partially concealed by her dress.

The man embraces the woman from the front with one arm.

His palm rests gently on the upper part of her chest near her collarbones and the base of her neck.

Several large silver rings with dark inlays adorn his fingers.

The embrace is tender, intimate, natural, and anatomically correct.

The man's hand rests lightly against the woman's upper chest without compressing her neck or throat.

The couple's heads are close together, creating an affectionate and cinematic composition.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the natural proportions of both individuals according to their original photographs.

Their heads must be normally sized, shoulders naturally proportioned, torsos anatomically correct in length, and arms and hands proportionate to their bodies.

The man has a natural masculine physique, without excessively massive shoulders or artificially enlarged muscles.

The woman has a harmonious feminine figure, delicate shoulders, a natural waist, and a full bust proportionate to her rib cage.

Do not enlarge her bust beyond its original proportions.

Her dress follows her natural figure without artificial reshaping.

Maintain the correct positioning of both individuals' arms during the embrace.

Forearms, wrists, hands, and fingers must have realistic lengths and natural anatomical connections.

The woman's raised arm must wrap naturally behind the man's neck.

The man's ring-adorned hand must rest correctly near the woman's collarbones, without intersecting her body or creating extra limbs.

No deformed joints, shortened torsos, oversized heads, exaggerated shoulders, or unnatural spinal curvature.

HAIR — MAN

Preserve the man's original hairstyle, natural hair color, and recognizable hairline from his uploaded photograph.

His hair is neatly swept back with subtle natural volume.

The hairstyle features realistic individual strands, natural texture, and soft movement.

The warm sunset light creates delicate highlights along the edges of his hair.

Do not alter his original hair shade, hairline, or recognizable hair characteristics.

HAIR — WOMAN

The woman's hair is long and thick, strictly retaining its original natural color from her uploaded photograph.

Her hair is worn loose in soft, natural waves.

The waves fall freely over her shoulders, down her back, and across her chest.

Individual strands are gently lifted by the sea breeze.

The hairstyle has natural volume, realistic density, and soft movement.

Warm golden-hour backlighting subtly illuminates the outer edges of her hair.

Do not dye, recolor, highlight artificially, or change her original hair shade.

MAKEUP — ROMANTIC GOTHIC SKELETONS

Both individuals wear professional black-and-white Halloween skull makeup.

Their faces are covered with a pale white-gray theatrical makeup base that preserves natural skin texture and recognizable facial features.

Deep black painted eye sockets surround the eyes.

The dark eye makeup follows the natural shape of each person's eyes without changing their real anatomy.

A black skeletal nasal cavity is painted over the nose.

The nose design follows the natural contours of the face without physically changing the nose.

Detailed white teeth with thin black spaces between them are painted over the closed lips and cheeks.

The painted teeth create the illusion of a skeletal jaw.

The teeth are individually defined, realistically shaded, and anatomically believable.

Expressive dark shading emphasizes the cheekbones and underlying bone structure.

The makeup creates a sophisticated gothic skull illusion while preserving both individuals' original facial proportions.

Their eyes retain their original shapes and colors.

The makeup is entirely theatrical body paint applied over intact, healthy skin.

No real exposed bones, facial deformation, or actual injuries.

SKELETAL NECK AND CHEST BODY ART

Realistic black-and-white body art depicting cervical vertebrae and skeletal connections covers both the man's and woman's necks.

The painted vertebrae follow the natural anatomy and contours of their necks.

Black shadows and white highlights create realistic depth between the painted skeletal structures.

On the woman, the skeletal makeup extends down onto the exposed upper chest.

The painted bones and dark shadows blend naturally with the skull makeup on her face and neck.

The body art remains detailed, artistic, and professionally executed.

The effect must look like realistic theatrical makeup rather than actual exposed skeletal anatomy.

MAN'S CLOTHING — ELEGANT BLACK SUIT

The man wears an elegant classic black suit.

A fitted black blazer features structured lapels, natural shoulder proportions, realistic seams, and subtle fabric texture.

Underneath the blazer is a white shirt with the upper buttons undone.

The shirt collar is casually open, creating a relaxed romantic appearance.

White shirt cuffs are visible beneath the jacket sleeves.

The suit fabric is matte, with natural folds and soft highlights from the sunset lighting.

The clothing fits his natural masculine physique without exaggerating his shoulders or chest.

The overall look is sophisticated, minimalist, gothic, and romantic.

WOMAN'S CLOTHING — BLACK GOTHIC DRESS

The woman wears a long black sleeveless dress.

The dress features exposed shoulders, wide shoulder straps, and a rounded neckline.

The fitted upper section emphasizes her natural bust and waist without altering her anatomical proportions.

A narrow black satin belt accentuates the waist.

The satin belt has a subtle sheen and realistic fabric texture.

The skirt is long, flowing, and multilayered.

It is made from lightweight semi-transparent black fabric with soft folds and delicate movement.

The fabric moves naturally in the gentle sea breeze.

The dress creates an elegant, feminine, romantic gothic silhouette.

Both outfits are refined, minimalist, and coordinated, without unnecessary accessories.

BACKGROUND — PEACEFUL SEASHORE AT SUNSET

The couple stands on a deserted seashore during a peaceful sunset.

Behind them stretches an endless calm sea with small, gentle waves.

The horizon line runs approximately at shoulder level.

The sky is light and soft cream-colored, with muted peach and golden tones.

The sun is positioned low behind the couple.

Its warm light creates a delicate golden glow around the man's hair and the couple's silhouettes.

The sea reflects subtle tones of cream, gold, sand, and gray-blue.

The atmosphere is peaceful, intimate, romantic, and slightly melancholic.

No buildings, rocks, palm trees, other people, cemeteries, candles, or Halloween decorations.

Only the couple, the calm sea, and the bright sunset sky.

LIGHTING AND COLOR GRADING

Soft natural golden-hour lighting illuminates the scene.

The warm sun behind the couple creates delicate golden rim lighting around their hair, shoulders, and silhouettes.

Their faces are illuminated by soft, diffused light.

The black-and-white skeleton makeup remains clearly visible and detailed.

Natural, slightly muted color grading features delicate cream, sand, gold, and gray-blue tones.

Moderate contrast and soft shadows create a romantic cinematic atmosphere.

The black clothing retains visible fabric texture and natural folds.

Subtle highlights reveal the man's silver rings, the woman's satin belt, and the fine details of their theatrical makeup.

The lighting must remain realistic and consistent with an outdoor sunset portrait.

No red lighting, neon, smoke, artificial glow, or excessively dark color grading.

CAMERA AND FRAMING

A romantic couple's portrait framed from the tops of their heads to the lower part of their torsos.

The camera is positioned at face level, using a 50–85mm lens with natural portrait perspective.

The man occupies the LEFT side of the frame and stands slightly behind the woman.

The woman is positioned on the RIGHT, closer to the camera.

Their heads touch gently, and their faces are located in the upper central portion of the photograph.

The frame fully includes both heads, hairstyles, shoulders, the romantic embrace, both subjects' hands, the upper part of the man's black suit, and the woman's black dress.

The lower edge of the frame extends below the waist, capturing part of the flowing skirt.

There is sufficient negative space above their heads to reveal the sunset sky.

The horizon remains natural and approximately level with their shoulders.

Do not stretch the figures, enlarge their heads, shorten their torsos, or alter their body proportions.

Natural portrait perspective without wide-angle distortion.

Professional cinematic photography, realistic skin texture, detailed artistic makeup, natural hair, soft depth of field, atmospheric sunset color grading, maximum photorealism, and 8K quality.

MAIN PRIORITY

Maximum recognizability of both individuals from their uploaded photographs.

Strict preservation of their original eye colors, natural hair colors, facial features, and human anatomy.

The man stands on the LEFT, slightly behind the woman, embracing her gently and kissing the area near her temple.

The woman stands on the RIGHT, looking peacefully into the distance with one arm wrapped behind the man's neck.

The man's ring-adorned hand rests naturally on her upper chest near the collarbones without compressing her neck.

Both wear detailed black-and-white theatrical skeleton makeup, including painted skull teeth, dark eye sockets, skeletal nose details, and realistic neck vertebrae.

The man wears an elegant black suit with a white shirt.

The woman wears a flowing black sleeveless dress with a narrow satin belt.

A calm sea, soft cream-and-gold sunset sky, gentle golden-hour backlighting, and a tender romantic atmosphere complete the scene.`,

  negative: `Altered faces, incorrect identity, blended facial features, face swapping, generic AI faces, changed head shapes, changed eye shapes, changed noses, changed lips, changed cheekbones, changed chins, changed ages, changed skin tones, changed original eye colors, changed original hair colors, excessive beautification, loss of facial resemblance,

Oversized heads, excessively broad shoulders, artificially enlarged male muscles, enlarged breasts, oversized arms, oversized hands, unnaturally narrow waist, shortened torsos, distorted body proportions, unnatural spinal curvature, exaggerated hips, unrealistic anatomy,

Deformed joints, incorrect hand placement, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, unnatural arm positioning, twisted limbs, duplicated wrists, floating hands, intersecting limbs, incorrect embrace,

Man's hand compressing the woman's neck, hand gripping the throat, choking pose, aggressive embrace, unnatural finger placement on the chest, missing rings, oversized rings,

Incorrect hairstyles, altered hairlines, artificial hair colors, dyed hair, wigs, incorrect man's hairstyle, missing woman's long loose hair, artificial curls, unrealistic hair texture,

Actual skulls replacing human faces, skeletal facial deformation, altered facial anatomy, incorrect skull makeup, missing painted teeth, missing black eye sockets, missing skeletal nose details, missing skeletal neck body art, missing painted vertebrae, exposed real bones, gore, open wounds, zombie decay,

Incorrect clothing, missing black suit, missing white shirt, incorrect suit color, missing shirt cuffs, incorrect dress, missing wide shoulder straps, missing rounded neckline, missing satin belt, incorrect dress length, bulky dress, excessive accessories,

Incorrect couple positioning, man standing in front of the woman, woman on the left, man on the right, missing embrace, unnatural embrace, missing romantic kiss near the temple, incorrect head positions, subjects standing far apart, looking directly into the camera instead of the distance,

Buildings, rocks, palm trees, additional people, cemeteries, candles, Halloween decorations, artificial scenery, city skyline, boats, excessive waves, stormy ocean, dark storm clouds,

Red lighting, neon lighting, smoke, artificial glow, excessively dark processing, harsh contrast, colored spotlights, overexposed faces, makeup hidden in shadows,

Tattoos, glasses, inscriptions, logos, watermarks, plastic-looking skin, waxy skin, excessive skin smoothing, cartoonish styling, artificial beauty filters,

Fisheye distortion, extreme wide-angle perspective, stretched figures, distorted mirror effects, CGI, 3D render, anime, cartoon, illustration, blurry faces, motion blur, low resolution, low quality, AI artifacts.`
},

{
  id: "067",
  title: "Twisted Clown Love",
  image: "prompt-067.PNG",
  imagePosition: "center 15%",

  positive: `Use the uploaded photographs of the man and woman as the ONLY sources of their appearance. Strictly preserve their real facial features, head shapes, facial contours, eyes, eyebrows, noses, lips, cheekbones, chins, natural facial asymmetry, ages, skin tones, eye colors, and original hair colors.

Do not alter their appearance, idealize their faces, or replace them with other characters.

Both individuals must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult couple styled as dark gothic clowns from an abandoned theater of horrors.

Professional atmospheric photography, with the composition, pose, costumes, makeup, lighting, and environment matching the reference as closely as possible.

POSE AND COMPOSITION

The man sits in the center of the frame on a black wooden chair with straight armrests.

His torso faces directly toward the camera.

His back is straight, and his shoulders are relaxed.

His head is upright, and his gaze is cold, intense, and directed straight into the camera lens.

One hand rests naturally on his thigh.

His other hand is raised to carefully support the back of the woman's head.

The woman is positioned to the LEFT of the man, with her body behind his shoulder.

She leans dramatically sideways and forward, lowering her head over the man's shoulder so that her face appears upside down next to his face.

The woman's inverted head is positioned slightly to the left of the man's head.

Her long hair hangs freely downward, almost reaching his knees.

Her face is fully visible, even though it is upside down.

Her gaze is directed straight into the camera.

Her expression is mysterious, intense, frightening, and theatrical.

The man gently supports the back of her head without compressing her neck or forcing her head into an unnatural position.

The woman's upside-down appearance must result from a physically possible sideways and forward inclination of her upper body.

The pose resembles a carefully performed theatrical trick.

Her neck, shoulders, and spine must maintain anatomically believable alignment.

Do not depict impossible spinal bending, extreme neck twisting, or a detached floating head.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the real proportions of both individuals according to their uploaded identity photographs.

Their heads must be normally sized relative to their shoulders and torsos.

Natural neck lengths, arm lengths, leg lengths, and anatomically correct hands and fingers are essential.

The man has a natural masculine physique, with normally proportioned shoulders and no artificially enlarged muscles.

The woman has a harmonious feminine figure, delicate shoulders, a natural waist, and a full bust proportionate to her rib cage.

Do not enlarge her bust beyond its original proportions.

The woman's dramatic leaning pose requires special anatomical accuracy.

Her head appears upside down because of the natural inclination of her upper body, not because of unnatural twisting of her neck.

Her shoulders, neck, and spine maintain anatomically correct alignment.

Her torso remains physically connected to the rest of her body behind the man's shoulder.

The man's supporting hand must connect naturally to his arm.

His fingers must rest gently and realistically against the back of the woman's head.

No floating head, disconnected body, extra arms, malformed joints, shortened torsos, oversized heads, or unnatural spinal curvature.

HAIR — MAN

The man's hair must strictly retain its original natural color from his uploaded photograph.

His hair is short and thick, with natural texture and slightly messy, voluminous styling.

The hairstyle features subtle volume at the roots and realistic individual strands.

Do not alter his original hairline, original hair shade, or recognizable hair characteristics.

HAIR — WOMAN

The woman's hair is long and thick, strictly retaining its original natural color from her uploaded photograph.

Her hair is worn loose with soft, natural waves.

Because her head is upside down, her hair hangs freely and vertically downward under the influence of gravity.

The long strands partially cover the man's shoulder and extend toward his thighs.

Individual strands frame her inverted face.

The hair has realistic density, natural texture, and believable movement.

The direction of the hair must correspond precisely to the inverted position of her head.

Her hair must not float upward, remain artificially attached to her shoulders, or defy gravity.

Strictly preserve the woman's original hair color and recognizable hair characteristics.

MAKEUP — DARK GOTHIC CLOWNS

Both individuals wear professional black gothic Halloween clown makeup.

The makeup is dramatic, theatrical, mysterious, and frightening while preserving their recognizable facial features.

All black lines, shadows, triangles, and decorative details are artistic cosmetic effects applied over intact skin.

The makeup must not change the real anatomy of either person's eyes, nose, lips, cheekbones, or jaw.

MAN'S MAKEUP

The man wears professional dark Halloween clown makeup.

His natural skin is visible beneath a subtle pale theatrical makeup base.

Deep black eyeshadow surrounds his eyes.

Elongated vertical black triangles extend downward beneath the lower eyelids.

The triangles are sharply defined and follow the natural contours of his face.

The tip of his nose is painted completely black.

His lips are covered with matte black lipstick.

Thin black lines extend outward and downward from the corners of his mouth, creating a sinister clown smile.

Several thin vertical streaks of black makeup run down his chin.

The makeup has realistic pigment texture, precise edges, and subtle blending.

His original facial identity remains clearly recognizable.

WOMAN'S MAKEUP

The woman wears a similar but more expressive glamorous gothic clown makeup look.

Her skin appears pale beneath the theatrical makeup while retaining realistic skin texture.

Intense black smoky eyes emphasize her original eye shapes.

Long, thick eyelashes create a dramatic beauty effect.

Her eyebrows are sharply defined and expressive.

Elongated black triangles with thin, pointed tips extend above and below her eyes.

The triangles are symmetrical in design and carefully painted.

A small black triangle is painted on her nose.

Her lips are deep black with a subtle glossy finish.

A wide, curved black smile is painted from the corners of her lips across her cheeks.

Thin decorative black makeup drips accompany the sinister smile.

The theatrical lines remain crisp, realistic, and professionally executed.

Her upside-down orientation must not distort the makeup or facial proportions.

All makeup details follow her actual facial anatomy.

MAN'S CLOTHING — ALL-BLACK FORMAL SUIT

The man wears a strict, entirely black suit.

A classic fitted black blazer features wide lapels, realistic seams, and natural shoulder proportions.

Underneath the blazer is a black shirt buttoned all the way to the collar.

He wears black trousers with a natural tailored fit.

The fabric is dense, matte, and features realistic folds and subtle texture.

The outfit is elegant, formal, minimalist, and gothic.

No tie, bright details, or additional accessories.

WOMAN'S CLOTHING — BLACK GOTHIC DRESS

The woman wears a fitted short black dress.

The dress features exposed shoulders and a deep but natural neckline.

The upper section follows the natural contours of her bust and waist without distorting her figure.

The fabric is smooth and matte, with soft folds and realistic texture.

Because of her dramatic leaning position, most of the dress is concealed behind the man's shoulder.

Only the naturally visible sections of her dress and shoulders should appear.

The outfit is elegant, dark, feminine, and minimalist.

No bright details, jewelry, or unnecessary accessories.

CHAIR — BLACK WOODEN ARMCHAIR

The man sits on a simple black wooden chair.

The chair has a sturdy construction, a straight back, and clearly visible straight armrests.

The wooden surface has a dark matte finish with subtle realistic texture.

The chair is correctly proportioned to the seated man's body.

His seated posture must be natural, with realistic leg positioning and correct contact with the seat.

The chair's armrests remain visible in the composition.

BACKGROUND — ABANDONED THEATER ATMOSPHERE

The setting is a dark, abandoned interior with an old gray-beige concrete wall.

The wall has a rough, weathered surface.

Visible cracks, stains, scuff marks, and areas of crumbling plaster create an authentic aged texture.

Small dark stains and barely visible traces of old reddish-brown paint appear on the upper part of the wall.

A thin horizontal metal pipe runs behind the chair.

The environment feels neglected, empty, atmospheric, and slightly unsettling.

The background remains minimal and realistic.

No additional objects, candles, skulls, weapons, Halloween decorations, or theatrical props.

The aged concrete wall and black wooden chair are the only important environmental elements.

LIGHTING AND COLOR GRADING

Soft, subdued neutral-warm lighting illuminates the couple from the front and slightly above.

Both faces are clearly visible.

The black gothic clown makeup has strong definition without excessive darkening.

Subtle shadows emphasize the contours of their faces, clothing, and dramatic pose.

Vintage-inspired, slightly muted color grading features gray-brown background tones, natural skin tones, and deep black clothing.

The lighting is cinematic but believable, resembling professional atmospheric portrait photography in an abandoned interior.

The black clothing retains visible fabric texture and natural folds.

The woman's long hanging hair remains clearly defined against the darker surroundings.

No red lighting, neon, fire, smoke, artificial glowing effects, or excessive darkness.

CAMERA AND FRAMING

A medium portrait of the couple.

The camera is positioned approximately at the seated man's chest level.

Use a 50–70mm lens with natural portrait perspective.

The man occupies the central and right portions of the frame.

The woman is positioned on the LEFT, with her upside-down face immediately next to his face.

Both heads are located in the upper half of the photograph.

The woman's long hair extends downward toward the lower part of the frame.

The lower edge of the photograph falls approximately at the level of the seated man's knees.

The composition includes the man's face, shoulders, arms, hands, and part of his trousers.

It also includes the woman's inverted head, shoulders, and long gravity-driven hair.

The chair's straight armrests must remain visible.

Both faces must be clearly recognizable despite the unusual pose and elaborate theatrical makeup.

Maintain natural perspective and anatomically believable proportions.

Do not stretch the figures, enlarge their heads, or distort the perspective.

Professional cinematic Halloween photography, natural skin texture, detailed theatrical makeup, realistic hair, detailed fabric texture, weathered concrete wall texture, maximum photorealism, and 8K quality.

MAIN PRIORITY

Maximum recognizability of both individuals from their uploaded photographs.

Strict preservation of their original eye colors, natural hair colors, facial features, and human anatomy.

The man sits in the CENTER on a black wooden chair with straight armrests, wearing a formal all-black suit.

He looks directly into the camera with a cold, intense expression.

The woman leans dramatically from behind his LEFT shoulder, with her face upside down beside his face.

Her long hair hangs naturally downward under gravity, reaching toward the man's thighs.

The man gently supports the back of her head without compressing her neck.

Both wear expressive black gothic clown makeup with dark eye triangles, black nose details, and sinister painted smiles.

An old weathered gray-beige concrete wall, a thin horizontal metal pipe, subdued neutral-warm lighting, and a vintage abandoned-theater atmosphere complete the scene.`,

  negative: `Altered individual faces, incorrect identity, blended facial features, face swapping, generic AI faces, changed head shapes, changed facial contours, changed eye shapes, changed noses, changed lips, changed cheekbones, changed chins, changed ages, changed skin tones, changed original eye colors, changed original hair colors, excessive beautification, loss of facial resemblance,

Oversized heads, tiny heads, excessively broad shoulders, artificially enlarged muscles, enlarged breasts, oversized arms, oversized hands, unnaturally narrow waist, shortened torsos, distorted body proportions, unrealistic anatomy,

Unnatural twisting of the woman's neck, broken-neck appearance, anatomically impossible spinal curvature, deformed joints, extra limbs, extra arms, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, duplicated wrists, incorrect arm connections,

Floating head, detached head, disconnected body, missing torso, incorrect positioning of the woman's torso, unnatural head support, hand gripping the throat, incorrect theatrical leaning pose, physically impossible inversion, distorted shoulders,

Incorrect hairstyles, altered hairlines, artificial hair colors, dyed hair, wigs, unnaturally short hair on the woman, hair defying gravity, floating hair, hair extending upward from an inverted head, incorrect hair direction,

Incorrect gothic clown makeup, altered facial anatomy, masks replacing real faces, missing black eye triangles, missing black clown smile, missing black nose makeup, missing black lipstick, missing decorative makeup streaks, excessive makeup obscuring identity,

Incorrect clothing, missing black suit, missing black shirt, missing black trousers, missing black dress, unnecessary accessories, bright clothing details, tie, jewelry,

Incorrect chair, missing armrests, oversized chair, distorted chair geometry, incorrect couple positioning, woman sitting in the chair instead of the man, man standing instead of sitting, woman on the right, incorrect upside-down pose, woman's face upright, woman's face hidden behind hair,

Additional objects, candles, skulls, weapons, Halloween decorations, excessive blood, gore, masks, fantasy scenery, extra people,

Tattoos, glasses, inscriptions, logos, watermarks, plastic-looking skin, waxy skin, excessive skin smoothing, cartoonish styling,

Red lighting, neon lighting, fire, smoke, artificial glow, excessive darkness, harsh color grading, overly dramatic colored spotlights,

Fisheye distortion, extreme wide-angle perspective, CGI, 3D render, anime, cartoon, illustration, stretched figures, blurred faces, motion blur, low resolution, low quality, AI artifacts.`
},

{
  id: "068",
  title: "Autumn Skeletons",
  image: "prompt-068.PNG",
  imagePosition: "center 0%",

  positive: `Use the uploaded photographs of the man and woman as the ONLY sources of their appearance. Strictly preserve their real facial features, head shapes, eyes, eyebrows, noses, lips, cheekbones, chins, ages, natural facial asymmetry, skin tones, eye colors, and original hair colors.

Do not alter their appearance, idealize their faces, or replace them with other characters.

Both individuals must remain maximally recognizable even under elaborate Halloween makeup.

Create an ultra-realistic cinematic Halloween fashion photograph of an adult couple styled as gothic skeletons in the middle of an autumn field.

Professional atmospheric photography with the composition, poses, costumes, makeup, lighting, and environment matching the reference as closely as possible.

POSE AND COMPOSITION

The man sits on a small white wooden chair in the center foreground.

His legs are spread naturally and fairly wide apart, with both feet resting firmly on the ground.

His torso leans slightly backward, and his shoulders are relaxed.

One arm hangs loosely between his legs, with his hand positioned near his knee.

His other arm is bent and rests naturally on his thigh.

His head is slightly lowered and turned to the LEFT.

His gaze is directed to the side rather than directly into the camera.

The woman stands behind the man, slightly to his LEFT, almost directly against the chair.

Her torso faces the camera, and one leg is positioned slightly forward.

One hand rests gently on the man's shoulder.

Her other arm hangs naturally along her body.

Her head is upright, and her gaze is directed slightly to the side.

The pose is calm, confident, mysterious, and elegant.

The seated man and standing woman form a balanced, natural couple composition.

CRITICALLY IMPORTANT — ANATOMY AND PROPORTIONS

Preserve the natural proportions of both individuals according to their original identity photographs.

Their heads must be normally sized, shoulders naturally proportioned, torsos anatomically correct in length, and arms and legs proportionate to their bodies.

The man has a natural masculine physique, without excessively broad shoulders or artificially enlarged muscles.

The woman has a harmonious feminine figure, delicate shoulders, a defined but natural waist, and a full bust proportionate to her rib cage.

The dress follows the natural contours of her body without artificially enlarging her bust.

Do not shorten their torsos or enlarge their heads, hands, or shoulders.

Maintain the natural perspective of the seated man and the woman standing behind him.

The woman's standing height and the man's seated height must be physically believable.

Their arms, hands, knees, legs, and feet must have realistic anatomical proportions.

The woman's hand must rest naturally on the man's shoulder, with correct finger placement.

The chair must be realistically proportioned to the human body.

HAIR AND HEADWEAR — MAN

Preserve the man's original natural hair color, hairstyle, and recognizable hairline from his uploaded photograph.

His hair is partially concealed beneath a black felt hat.

The hat features a wide brim and a low crown.

It is tilted slightly forward, creating a mysterious vintage appearance.

The visible hair retains its natural texture and original shade.

Do not recolor his hair or alter his recognizable hair characteristics.

HAIR — WOMAN

The woman's hair is long and thick, strictly retaining its original natural color from her uploaded photograph.

Her hair is worn loose and styled in large, soft waves with natural volume.

Individual strands fall freely over her shoulders and chest.

The waves have realistic texture, density, and movement.

The hairstyle is elegant, voluminous, and slightly windswept.

Do not change her original hair shade, hairline, or recognizable hair characteristics.

MAKEUP — GOTHIC SKELETONS

Both individuals wear professional black-and-white Halloween skull makeup.

Their faces are covered with a white theatrical makeup base that preserves natural skin texture.

Deep black painted eye sockets surround their eyes.

The dark makeup follows their original eye shapes without changing their anatomy or eye colors.

A black skeletal nasal cavity is painted over each person's nose.

Detailed white teeth with thin black spaces between them are painted over the closed lips and cheeks.

The painted teeth create the realistic illusion of a skeletal jaw.

Individual teeth are carefully defined with believable shapes, spacing, and shading.

Black shading along the cheekbones imitates hollow skeletal cavities.

White and gray highlights create realistic three-dimensional depth.

The makeup follows the real contours of their faces without altering their individual identities.

Their original facial proportions, eye colors, and recognizable features must remain intact.

SKELETAL NECK AND CHEST BODY ART

On the woman's neck and exposed upper chest, white cervical vertebrae, collarbones, and upper ribs are painted over a black background.

The skeletal body art follows her natural anatomy.

Careful black shading and white highlights create a three-dimensional painted bone effect.

The man has similar skeletal makeup on the exposed part of his neck.

The makeup connects naturally with the painted skull designs on their faces.

All skeletal details are professional theatrical body paint applied over intact skin.

The makeup must look realistic and three-dimensional without physically transforming their faces or bodies.

Do not replace their heads with actual skulls or their bodies with real skeletons.

MAN'S CLOTHING — VINTAGE GOTHIC STYLE

The man wears a fitted white shirt with a small dark dotted pattern.

The shirt has long sleeves casually rolled up to the forearms.

Several upper buttons are undone, creating a relaxed vintage appearance.

The shirt has realistic cotton texture, visible seams, and natural folds.

Narrow black suspenders run vertically over his chest.

The suspenders connect naturally to the waistband of his trousers.

He wears classic black trousers with a slightly tapered cut.

The trousers fit his natural body proportions.

Tall black leather lace-up boots complete the outfit.

The boots feature realistic leather texture, visible laces, and natural creases.

A black wide-brimmed felt hat sits on his head, tilted slightly forward.

The overall outfit is masculine, elegant, vintage-inspired, and gothic.

WOMAN'S CLOTHING — ELEGANT BLACK DRESS

The woman wears an elegant long black dress with a fitted silhouette.

The dress features a closed upper section and long, slightly voluminous sleeves with fitted cuffs.

The fabric fits closely around her waist and hips, emphasizing her natural feminine figure.

The dress follows her real anatomical proportions without exaggeration.

The skirt is asymmetrical.

A high front slit reveals one leg.

The back of the skirt is long and flows freely almost to the ground.

The dress fabric is dense and matte, with soft, natural folds and realistic movement.

She wears black high-heeled sandals with thin stiletto heels.

Delicate straps wrap naturally around her ankles.

The sandals are realistically proportioned and make believable contact with the ground.

The overall outfit is sophisticated, mysterious, feminine, and gothic.

CHAIR — SMALL WHITE WOODEN CHAIR

The man sits on a small white wooden chair positioned directly among the dry autumn grass.

The chair has a simple, realistic wooden construction.

Its proportions are appropriate for the man's seated body.

The chair supports his weight naturally.

The white painted wooden surface has subtle texture and realistic edges.

The chair's legs are partially concealed by the tall dry grass.

The chair is positioned between the man's spread legs and remains visibly connected to the ground.

BACKGROUND — AUTUMN FIELD

A wide autumn field filled with tall, dry golden-beige grass.

Scattered dark-brown stems and wild plants create natural texture throughout the foreground and background.

The dry grass surrounds the chair and extends into the distance.

In the background is a dense line of trees.

The trees feature muted yellow, brown, and dark-green autumn foliage.

Several tall coniferous trees are visible among the deciduous trees.

The sky is light gray and completely overcast.

The atmosphere resembles a cool, cloudy autumn day.

The setting is quiet, isolated, natural, and slightly melancholic.

No buildings, cemeteries, pumpkins, candles, or additional Halloween decorations.

Only the couple, the white wooden chair, the dry autumn field, the distant trees, and the overcast sky.

LIGHTING AND COLOR GRADING

Soft, diffused natural daylight illuminates the scene under overcast weather conditions.

Both faces and figures are evenly illuminated.

The lighting produces soft shadows without harsh contrasts.

Vintage-inspired, slightly muted color grading emphasizes cool grayish sky tones and warm golden-brown grass tones.

The black clothing appears deep and rich, with visible fabric texture.

The white skeleton makeup remains strongly contrasting without overexposure.

The white shirt and chair retain natural highlights and realistic tonal detail.

The autumn trees display subdued yellow, brown, and dark-green colors.

The overall mood is cinematic, calm, mysterious, and naturally atmospheric.

No red lighting, neon, artificial illumination, fog, or fantasy effects.

CAMERA AND FRAMING

A professional full-body photograph of the couple.

The camera is positioned approximately at the seated man's chest level.

Maintain sufficient distance to preserve natural perspective.

Use a 50–70mm lens with realistic portrait proportions.

The man occupies the central and lower portions of the frame.

The woman stands behind him on the LEFT.

The woman's head is positioned higher than the man's head.

Both figures are fully visible.

The white chair is positioned between the man's legs, with its legs partially concealed by dry grass.

The upper part of the composition includes autumn trees and a section of the overcast sky.

The lower part includes dry grass and both individuals' footwear.

The man's black hat, both subjects' heads, the woman's dress, the chair, legs, boots, and high-heeled sandals must remain visible.

Do not crop their heads, hat, legs, or shoes.

Do not stretch the figures or distort their proportions for the sake of composition.

Professional realistic Halloween photography, natural skin texture, detailed theatrical makeup, realistic fabrics, soft depth of field, atmospheric autumn color grading, maximum photorealism, and 8K quality.

MAIN PRIORITY

Maximum recognizability of both individuals from their uploaded photographs.

Strict preservation of their original eye colors, natural hair colors, facial features, and human anatomy.

The man wears a white patterned shirt with black suspenders, classic black trousers, black leather lace-up boots, and a black wide-brimmed felt hat.

He sits naturally on a small white wooden chair in the center foreground, with his legs spread apart and his gaze directed to the side.

The woman stands behind him, slightly to his LEFT, wearing a fitted long black dress with an asymmetrical high front slit and black high-heeled sandals.

One of her hands rests gently on his shoulder.

Both wear detailed black-and-white theatrical skeleton makeup with painted skull teeth, dark eye sockets, skeletal nose details, and realistic neck body art.

A dry golden autumn field, distant muted autumn trees, a light-gray overcast sky, soft diffused daylight, and vintage-inspired color grading complete the scene.`,

  negative: `Altered individual facial features, incorrect identity, blended facial features, face swapping, generic AI faces, changed head shapes, changed eye shapes, changed noses, changed lips, changed cheekbones, changed chins, changed ages, changed skin tones, changed original eye colors, changed original hair colors, excessive beautification, loss of facial resemblance,

Oversized heads, tiny heads, excessively broad shoulders, artificially enlarged muscles, enlarged breasts, oversized arms, oversized hands, unnaturally narrow waist, shortened torsos, deformed legs, incorrect joints, distorted anatomy, unrealistic body proportions,

Extra arms, extra legs, extra hands, extra fingers, missing fingers, fused fingers, malformed hands, unnatural hand positioning, duplicated limbs, floating limbs, incorrect anatomy,

Incorrect hairstyles, changed hair colors, altered hairlines, artificial-looking hair, wigs, missing woman's long wavy hair, unrealistic hair texture,

Actual skeletons replacing human bodies, real skulls replacing human faces, skeletal facial deformation, altered facial anatomy, incorrect skull makeup, missing painted teeth, missing black eye sockets, missing skeletal nose details, missing skeletal neck makeup, missing painted collarbones and ribs, real exposed bones, gore, open wounds,

Incorrect clothing, missing white patterned shirt, plain white shirt without dotted pattern, missing black suspenders, missing black wide-brimmed hat, incorrect hat shape, incorrect trousers, missing black leather boots, missing black dress, incorrect dress silhouette, missing long sleeves, incorrect skirt slit, missing high-heeled sandals, incorrect footwear,

Incorrect couple positioning, woman sitting instead of the man, man standing instead of sitting, missing hand on the man's shoulder, incorrect chair proportions, missing chair, incorrect chair color, oversized chair, floating chair, unnatural seated posture,

Buildings, cemeteries, pumpkins, candles, additional Halloween decorations, artificial scenery, urban background, indoor setting, extra people, distracting props,

Red lighting, neon, artificial spotlights, fog, fantasy effects, excessive contrast, overexposure, dramatic colored lighting, unrealistic shadows,

Tattoos, glasses, inscriptions, logos, watermarks, plastic-looking skin, waxy skin, excessive skin smoothing, cartoonish styling,

Fisheye distortion, extreme wide-angle perspective, CGI, 3D render, anime, cartoon, illustration, stretched figures, cropped heads, cropped hat, cropped legs, cropped shoes, blurred faces, motion blur, low resolution, low quality, AI artifacts.`
}
];
