const ibData = [
    // --- TEMA 1: IDENTIDADES ---
    { tema: "Identidades", pregunta: "¿Cómo te describirías físicamente y tu personalidad?", tip: "Usa el verbo SER y adjetivos descriptivos." },
    { tema: "Identidades", pregunta: "¿Qué ropa prefieres llevar los fines de semana?", tip: "Vocabulario de colores y materiales." },
    { tema: "Identidades", pregunta: "¿Cuál es tu plato favorito y qué ingredientes lleva?", tip: "Usa el presente y conectores de secuencia." },
    { tema: "Identidades", pregunta: "¿Crees que tienes una dieta equilibrada? ¿Por qué?", tip: "Usa 'creo que' o 'en mi opinión'." },
    { tema: "Identidades", pregunta: "¿Qué desayunaste esta mañana antes de venir al instituto?", tip: "Usa el Pretérito Indefinido." },
    { tema: "Identidades", pregunta: "¿Qué vas a cocinar para tu familia el próximo domingo?", tip: "Usa la estructura IR + A + Infinitivo." },
    { tema: "Identidades", pregunta: "¿Cómo era tu salud cuando eras niño/a?", tip: "Usa el Pretérito Imperfecto." },
    { tema: "Identidades", pregunta: "¿Por qué es importante hacer ejercicio físico regularmente?", tip: "Usa 'porque' y verbos de obligación (deber)." },
    { tema: "Identidades", pregunta: "¿Qué opinas de la comida rápida?", tip: "Expresa ventajas y desventajas." },
    { tema: "Identidades", pregunta: "¿Cómo celebraste tu último cumpleaños?", tip: "Narra eventos en pasado." },
    { tema: "Identidades", pregunta: "¿Prefieres vivir en una familia grande o pequeña?", tip: "Usa comparativos (mejor que, más que)." },
    { tema: "Identidades", pregunta: "¿Qué haces para evitar el estrés de los exámenes?", tip: "Usa verbos reflexivos como 'relajarse'." },
    { tema: "Identidades", pregunta: "¿Te gusta probar comida de otros países? ¿Cuál?", tip: "Usa el verbo 'gustar' correctamente." },
    { tema: "Identidades", pregunta: "¿Qué importancia tiene la religión o los valores en tu vida?", tip: "Usa vocabulario abstracto." },
    { tema: "Identidades", pregunta: "¿A qué hora te despertaste ayer?", tip: "Verbos reflexivos en pasado." },
    { tema: "Identidades", pregunta: "¿Qué vas a hacer para mejorar tu salud el próximo año?", tip: "Habla de planes futuros." },
    { tema: "Identidades", pregunta: "¿Cómo es tu rutina de aseo personal por las mañanas?", tip: "Usa 'primero', 'luego', 'después'." },
    { tema: "Identidades", pregunta: "¿Cómo son las celebraciones de cumpleaños en tu país?", tip: "Usa el presente de indicativo." },
    { tema: "Identidades", pregunta: "¿Cuál es la cualidad más importante de un amigo?", tip: "Usa adjetivos de personalidad." },
    { tema: "Identidades", pregunta: "¿Qué hiciste la semana pasada para relajarte?", tip: "Pretérito indefinido." },

    // --- TEMA 2: EXPERIENCIAS ---
    { tema: "Experiencias", pregunta: "¿Cómo es tu rutina diaria durante la semana escolar?", tip: "Usa conectores de tiempo." },
    { tema: "Experiencias", pregunta: "¿Qué actividades de ocio prefieres hacer con tus amigos?", tip: "Verbos de gusto y preferencia." },
    { tema: "Experiencias", pregunta: "¿Adónde fuiste de vacaciones el verano pasado?", tip: "Usa el Pretérito Indefinido." },
    { tema: "Experiencias", pregunta: "¿Qué vas a hacer en tus próximas vacaciones de Navidad?", tip: "Usa el futuro próximo (ir a)." },
    { tema: "Experiencias", pregunta: "¿Has visitado alguna vez un país hispanohablante?", tip: "Usa el Pretérito Perfecto (He visitado)." },
    { tema: "Experiencias", pregunta: "¿Cómo prefieres viajar: en avión, en tren o en coche?", tip: "Justifica tu respuesta." },
    { tema: "Experiencias", pregunta: "¿Qué hiciste el sábado pasado por la noche?", tip: "Narra acciones terminadas." },
    { tema: "Experiencias", pregunta: "¿Qué hacías en tu tiempo libre cuando tenías diez años?", tip: "Usa el Pretérito Imperfecto." },
    { tema: "Experiencias", pregunta: "¿Cuál es el festival más importante de tu país?", tip: "Describe una tradición." },
    { tema: "Experiencias", pregunta: "¿Cómo celebran la Navidad en tu familia?", tip: "Usa el presente habitual." },
    { tema: "Experiencias", pregunta: "¿Qué planes tienes para este fin de semana?", tip: "Usa el futuro o 'pienso + infinitivo'." },
    { tema: "Experiencias", pregunta: "¿Qué tiempo hacía en tus últimas vacaciones?", tip: "Usa el imperfecto para descripciones climáticas." },
    { tema: "Experiencias", pregunta: "¿Prefieres las vacaciones de verano o las de invierno?", tip: "Compara ambos climas." },
    { tema: "Experiencias", pregunta: "¿Qué actividades deportivas practicaste el mes pasado?", tip: "Vocabulario de deportes." },
    { tema: "Experiencias", pregunta: "¿Cómo sería tu viaje ideal si tuvieras mucho dinero?", tip: "Intenta usar el condicional." },
    { tema: "Experiencias", pregunta: "¿A qué hora sueles acostarte los días de diario?", tip: "Usa el verbo 'soler'." },
    { tema: "Experiencias", pregunta: "¿Qué compraste la última vez que fuiste al centro comercial?", tip: "Vocabulario de tiendas y ropa." },
    { tema: "Experiencias", pregunta: "¿Qué monumentos visitaste en tu último viaje escolar?", tip: "Narra una excursión pasada." },
    { tema: "Experiencias", pregunta: "¿Te gusta ir al cine o prefieres ver películas en casa?", tip: "Argumenta tu elección." },
    { tema: "Experiencias", pregunta: "¿Qué hiciste ayer después de las clases?", tip: "Usa marcadores temporales." },

    // --- TEMA 3: INGENIO HUMANO ---
    { tema: "Ingenio Humano", pregunta: "¿Cuál es tu red social favorita y por qué?", tip: "Usa 'porque' y 'ya que'." },
    { tema: "Ingenio Humano", pregunta: "¿Crees que los jóvenes pasan demasiado tiempo con el móvil?", tip: "Usa expresiones de duda o certeza." },
    { tema: "Ingenio Humano", pregunta: "¿Para qué utilizaste internet ayer?", tip: "Usa 'para' + infinitivo." },
    { tema: "Ingenio Humano", pregunta: "¿Cómo será la tecnología dentro de cincuenta años?", tip: "Usa el futuro simple." },
    { tema: "Ingenio Humano", pregunta: "¿Prefieres leer libros en papel o en formato digital?", tip: "Compara ventajas." },
    { tema: "Ingenio Humano", pregunta: "¿Qué programas de televisión veías cuando eras pequeño?", tip: "Usa el imperfecto." },
    { tema: "Ingenio Humano", pregunta: "¿Cuál es tu invento favorito de la historia?", tip: "Describe su utilidad." },
    { tema: "Ingenio Humano", pregunta: "¿Cómo ayudan los ordenadores en tus estudios del IB?", tip: "Vocabulario técnico." },
    { tema: "Ingenio Humano", pregunta: "¿Qué película viste recientemente y qué te pareció?", tip: "Usa adjetivos de opinión." },
    { tema: "Ingenio Humano", pregunta: "¿Crees que los robots sustituirán a los humanos en el trabajo?", tip: "Especula sobre el futuro." },
    { tema: "Ingenio Humano", pregunta: "¿Escuchas la radio o prefieres los podcasts?", tip: "Habla de tus hábitos." },
    { tema: "Ingenio Humano", pregunta: "¿Qué aplicaciones nuevas vas a descargar en tu móvil pronto?", tip: "Planes futuros." },
    { tema: "Ingenio Humano", pregunta: "¿Cómo te comunicas normalmente con tus amigos?", tip: "Usa el presente." },
    { tema: "Ingenio Humano", pregunta: "¿Qué opinas de los videojuegos violentos?", tip: "Expresa una postura crítica." },
    { tema: "Ingenio Humano", pregunta: "¿Recuerdas tu primer teléfono móvil? ¿Cómo era?", tip: "Describe un objeto del pasado." },
    { tema: "Ingenio Humano", pregunta: "¿Es importante aprender otras lenguas en el mundo moderno?", tip: "Justifica la importancia." },
    { tema: "Ingenio Humano", pregunta: "¿Prefieres ver las noticias en la tele o leerlas en internet?", tip: "Habla de medios de comunicación." },
    { tema: "Ingenio Humano", pregunta: "¿Qué tecnología utilizaste para hacer tus deberes anoche?", tip: "Pasado reciente." },
    { tema: "Ingenio Humano", pregunta: "¿Podrías vivir una semana sin conexión a internet?", tip: "Condicional o hipótesis." },
    { tema: "Ingenio Humano", pregunta: "¿Cuál es tu aplicación más útil para estudiar español?", tip: "Habla de recursos educativos." },

    // --- TEMA 4: ORGANIZACIÓN SOCIAL ---
    { tema: "Organización Social", pregunta: "¿Cómo es tu instituto? Describe las instalaciones.", tip: "Usa 'hay' y 'está'." },
    { tema: "Organización Social", pregunta: "¿Qué asignaturas estudias para el diploma del IB?", tip: "Vocabulario académico." },
    { tema: "Organización Social", pregunta: "¿Qué carrera vas a estudiar en la universidad?", tip: "Futuro profesional." },
    { tema: "Organización Social", pregunta: "¿En qué trabajaban tus abuelos hace años?", tip: "Usa el imperfecto." },
    { tema: "Organización Social", pregunta: "¿Te gustaría trabajar en el extranjero en el futuro?", tip: "Usa 'Me gustaría'." },
    { tema: "Organización Social", pregunta: "¿Cómo es tu barrio o el pueblo donde vives?", tip: "Adjetivos de lugar." },
    { tema: "Organización Social", pregunta: "¿Qué tiendas hay cerca de tu casa?", tip: "Vocabulario de ciudad." },
    { tema: "Organización Social", pregunta: "¿Cómo era tu escuela primaria comparada con el instituto?", tip: "Usa comparativos en pasado." },
    { tema: "Organización Social", pregunta: "¿Qué normas son las más importantes en tu colegio?", tip: "Usa el verbo 'tener que'." },
    { tema: "Organización Social", pregunta: "¿Prefieres trabajar solo o en equipo? ¿Por qué?", tip: "Justifica tu preferencia." },
    { tema: "Organización Social", pregunta: "¿Qué transporte público hay en tu ciudad?", tip: "Vocabulario de transporte." },
    { tema: "Organización Social", pregunta: "¿Cómo ayudaste en tu comunidad recientemente (CAS)?", tip: "Habla de voluntariado en pasado." },
    { tema: "Organización Social", pregunta: "¿Cuál es el problema social más grave en tu país hoy?", tip: "Expresa opinión sobre actualidad." },
    { tema: "Organización Social", pregunta: "¿Qué vas a hacer cuando termines tus exámenes finales?", tip: "Planes post-examen." },
    { tema: "Organización Social", pregunta: "¿Cómo es la casa de tus sueños?", tip: "Usa el condicional o presente." },
    { tema: "Organización Social", pregunta: "¿Qué hiciste en tu barrio el pasado fin de semana?", tip: "Narra actividades locales." },
    { tema: "Organización Social", pregunta: "¿Cuál es tu asignatura más difícil y por qué?", tip: "Usa superlativos (la más...)." },
    { tema: "Organización Social", pregunta: "¿Cómo se llega desde tu casa hasta el instituto?", tip: "Da instrucciones de dirección." },
    { tema: "Organización Social", pregunta: "¿Qué tipo de trabajo te gustaría tener de mayor?", tip: "Vocabulario de profesiones." },
    { tema: "Organización Social", pregunta: "¿Hay muchas zonas verdes o parques en tu ciudad?", tip: "Usa 'hay' y 'muchos/as'." },

    // --- TEMA 5: COMPARTIR EL PLANETA ---
    { tema: "Compartir el Planeta", pregunta: "¿Qué tiempo hace hoy en tu ciudad?", tip: "Vocabulario meteorológico." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué haces en casa para reciclar y ahorrar energía?", tip: "Usa el presente habitual." },
    { tema: "Compartir el Planeta", pregunta: "¿Cuál es el problema medioambiental que más te preocupa?", tip: "Usa 'me preocupa'." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué hiciste ayer para ayudar al medio ambiente?", tip: "Narra acciones ecológicas pasadas." },
    { tema: "Compartir el Planeta", pregunta: "¿Cómo va a cambiar el clima en el futuro según los expertos?", tip: "Especula sobre el clima." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué opinas del calentamiento global?", tip: "Vocabulario sobre cambio climático." },
    { tema: "Compartir el Planeta", pregunta: "¿Has participado alguna vez en una campaña ecológica?", tip: "Pretérito perfecto." },
    { tema: "Compartir el Planeta", pregunta: "¿Cómo es la geografía de tu país? (Montañas, costa, ríos).", tip: "Vocabulario de geografía." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué animales están en peligro de extinción en tu región?", tip: "Usa 'están en peligro'." },
    { tema: "Compartir el Planeta", pregunta: "¿Prefieres vivir en el campo o en la ciudad?", tip: "Argumenta ventajas ambientales." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué vas a hacer mañana para reducir el consumo de plástico?", tip: "Usa el futuro próximo." },
    { tema: "Compartir el Planeta", pregunta: "¿Cómo era el clima en tu país hace veinte años?", tip: "Usa el imperfecto." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué importancia tienen los parques nacionales?", tip: "Usa el presente." },
    { tema: "Compartir el Planeta", pregunta: "¿Por qué es necesario ahorrar agua hoy en día?", tip: "Usa 'es necesario que'." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué desastres naturales han ocurrido en tu país recientemente?", tip: "Pretérito perfecto." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué fuentes de energía renovable conoces?", tip: "Vocabulario técnico-ambiental." },
    { tema: "Compartir el Planeta", pregunta: "¿Cómo afectó la contaminación a tu ciudad el año pasado?", tip: "Narra impactos ambientales." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué podemos hacer para proteger los océanos?", tip: "Usa el verbo 'poder' + infinitivo." },
    { tema: "Compartir el Planeta", pregunta: "¿Te gustaría vivir en un lugar con un clima tropical?", tip: "Usa el condicional." },
    { tema: "Compartir el Planeta", pregunta: "¿Qué compraste ayer que sea respetuoso con el medio ambiente?", tip: "Habla de consumo responsable." }
];

const btn = document.getElementById('generate-btn');
const themeBadge = document.getElementById('theme-badge');
const questionTxt = document.getElementById('question-text');
const grammarTip = document.getElementById('grammar-tip');
const topicSelect = document.getElementById('topic-select');

// Colores suaves para identificar temas
const colors = {
    "Identidades": "#fee2e2",
    "Experiencias": "#e0f2fe",
    "Ingenio Humano": "#dcfce7",
    "Organización Social": "#fef9c3",
    "Compartir el Planeta": "#f3f4f6"
};

btn.addEventListener('click', () => {
    const selected = topicSelect.value;
    const filtered = selected === "Todos" ? ibData : ibData.filter(i => i.tema === selected);
    
    if (filtered.length > 0) {
        const item = filtered[Math.floor(Math.random() * filtered.length)];
        
        // Animación de salida
        questionTxt.style.opacity = "0";
        questionTxt.style.transform = "translateY(10px)";
        
        setTimeout(() => {
            themeBadge.innerText = item.tema;
            themeBadge.style.backgroundColor = colors[item.tema] || "#f3f4f6";
            questionTxt.innerText = item.pregunta;
            grammarTip.innerText = "Tip: " + item.tip;
            
            // Animación de entrada
            questionTxt.style.opacity = "1";
            questionTxt.style.transform = "translateY(0)";
        }, 150);
    }
});

// Estilo inicial para la animación
questionTxt.style.transition = "all 0.2s ease";
