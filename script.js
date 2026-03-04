const ibData = [
    // --- IDENTIDADES ---
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Cómo es tu personalidad?", tip: "Usa el verbo 'ser' y adjetivos descriptivos[cite: 4]." },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Cómo eres de carácter?", tip: "Usa conectores como 'por un lado... por otro...'[cite: 5]." },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Puedes describirte como persona?", tip: "Habla de tus cualidades y defectos[cite: 6]." },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Qué tipo de persona eres?", tip: "Usa frases como 'Me considero alguien...'[cite: 7]." },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Te consideras un adolescente típico? ¿Por qué?", tip: "Usa 'porque' para justificar tu opinión[cite: 8]." },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Cómo es tu familia?", tip: "Describe a los miembros usando posesivos (mi, mis)[cite: 10]." },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Puedes describir a tu familia?", tip: "Menciona la relación entre los miembros[cite: 11]." },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Tienes mascotas?", tip: "Usa el verbo 'tener'[cite: 12]." },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Te gustaría tener una mascota? ¿Por qué?", tip: "Usa el condicional 'Me gustaría'[cite: 13]." },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Te gusta pasar tiempo con tu familia? ¿Por qué?", tip: "Describe una actividad que hagan juntos[cite: 14]." },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Cuál es tu comida favorita?", tip: "Usa verbos de gusto: 'Me encanta', 'Me apasiona'[cite: 16]." },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Qué desayunas normalmente?", tip: "Usa adverbios: 'normalmente', 'siempre'[cite: 17]." },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Cuál es tu desayuno favorito?", tip: "Describe los ingredientes detalladamente[cite: 18]." },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Qué comida es muy típica en tu país?", tip: "Explica brevemente de qué está hecha[cite: 19]." },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Piensas que eres lo que comes y bebes?", tip: "Opina sobre la salud y la dieta[cite: 20]." },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Cómo te mantienes en forma?", tip: "Usa el presente de indicativo[cite: 25]." },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Llevas una vida sana? ¿Por qué?", tip: "Habla sobre el sueño y el ejercicio[cite: 26]." },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Realizas suficiente ejercicio fisico?", tip: "Menciona la frecuencia: 'dos veces por semana'[cite: 27]." },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Llevas una alimentación sana? ¿Por qué?", tip: "Menciona frutas, verduras y agua[cite: 28]." },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Mantienes un buen equilibrio entre actividad física y sedentaria? ¿Por qué?", tip: "Compara el tiempo de deporte vs pantallas[cite: 29]." },

    // --- EXPERIENCIAS ---
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Cómo es un día en tu vida?", tip: "Usa verbos reflexivos: 'me levanto', 'me ducho'[cite: 36]." },
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Qué comidas haces normalmente en un día? ¿A qué hora?", tip: "Usa 'a las...' para indicar la hora[cite: 37]." },
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Qué haces todas las mañanas?", tip: "Usa conectores: 'primero', 'después', 'luego'[cite: 38]." },
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Prefieres estudiar por las mañanas o por la noche? ¿Por qué?", tip: "Compara usando 'prefiero... antes que...'[cite: 39]." },
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Cuál es tu horario en un día escolar?", tip: "Describe tu jornada desde la mañana a la tarde[cite: 40]." },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Tienes algún pasatiempo?", tip: "Usa 'Mi pasatiempo es...'[cite: 42]." },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Qué te gusta hacer en tu tiempo libre?", tip: "Usa 'En mi tiempo libre suelo...'[cite: 43]." },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Cuál es tu pasatiempo favorito?", tip: "Explica la razón de tu preferencia[cite: 44]." },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Qué deportes practicas?", tip: "Usa el verbo 'jugar a' o 'practicar'[cite: 45]." },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Qué vas a hacer este fin de semana?", tip: "Usa el futuro: Ir + a + infinitivo[cite: 46]." },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿Piensas que viajar es una experiencia positiva?", tip: "Usa 'Desde mi punto de vista...'[cite: 49]." },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿A dónde te gusta ir de vacaciones?", tip: "Menciona destinos y tipos de paisaje[cite: 50]." },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿A dónde sueles ir de vacaciones?", tip: "Habla de tus hábitos vacacionales[cite: 51]." },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿Cuál es tu país favorito para viajar?", tip: "Justifica por qué ese país te atrae[cite: 52]." },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿Has ido alguna vez a un país hispanohablante? ¿Cómo fue la experiencia?", tip: "Usa el pretérito perfecto o indefinido[cite: 53]." },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿Qué hiciste durante las últimas vacaciones?", tip: "Usa el pretérito indefinido: 'fui', 'comí', 'hice'[cite: 54]." },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Qué tradiciones celebras?", tip: "Menciona tradiciones de tu cultura[cite: 59]." },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Cómo celebras normalmente tu cumpleaños?", tip: "Usa el presente de indicativo[cite: 60]." },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Puedes describir un festival en tu ciudad?", tip: "Usa adjetivos para el ambiente y la gente[cite: 61]." },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Conoces algún festival o celebración del mundo hispano?", tip: "Nombra uno y describe qué se hace[cite: 62]." },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Piensas que es importante celebrar las tradiciones? ¿Por qué?", tip: "Reflexiona sobre la cultura y la identidad[cite: 63]." },

    // --- INGENIO HUMANO ---
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Cómo vas a la escuela?", tip: "Usa 'en' + transporte (en bus, en coche)[cite: 70]." },
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Qué medios de transporte usas normalmente?", tip: "Enumera tus opciones habituales[cite: 71]." },
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Cuál es tu opinión sobre el transporte en el lugar donde vives?", tip: "Usa 'creo que', 'pienso que'[cite: 72]." },
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Qué medio de transporte piensas que es el más ecológico? ¿Por qué?", tip: "Usa el superlativo: 'el más... de'[cite: 73]." },
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Hay en el lugar donde vives un medio de transporte especial? ¿Cuál?", tip: "Describe algo único de tu zona[cite: 74]." },
    { tema: "Ingenio humano", subtema: "Entretenimiento", pregunta: "¿Tocas algún instrumento musical? ¿Cuál?", tip: "Usa el verbo 'tocar'[cite: 76]." },
    { tema: "Ingenio humano", subtema: "Entretenimiento", pregunta: "¿Te gusta ir de fiesta?", tip: "Justifica por qué te gusta o no[cite: 77]." },
    { tema: "Ingenio humano", subtema: "Entretenimiento", pregunta: "¿Te gusta ir a conciertos de música? ¿De qué tipo?", tip: "Habla sobre tus géneros favoritos[cite: 78]." },
    { tema: "Ingenio humano", subtema: "Entretenimiento", pregunta: "¿Qué actividades haces para entretenerte?", tip: "Usa 'Para entretenerme, yo...'[cite: 79]." },
    { tema: "Ingenio humano", subtema: "Entretenimiento", pregunta: "¿Qué prefieres ver una película en casa o en el cine? ¿Por qué?", tip: "Usa comparativos de superioridad[cite: 80]." },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Qué medios de comunicación usas en tu vida?", tip: "Nombra internet, radio, TV, etc.[cite: 83]." },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Ves la tele en casa? ¿Por qué?", tip: "Habla sobre programas o plataformas[cite: 84]." },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Qué medio de comunicación piensas que es el más importante? ¿Por qué?", tip: "Argumenta tu elección[cite: 85]." },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Piensas que es necesario tener una televisión o una radio si ahora usamos el internet para todo?", tip: "Usa 'aunque' para contrastar ideas[cite: 86]." },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Lees periódicos o revistas impresas en papel? ¿Por qué?", tip: "Usa 'ya que' o 'debido a'[cite: 87]." },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Cómo usas la tecnología?", tip: "Describe su papel en tu día a día[cite: 92]." },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Qué aplicaciones usas para estudiar?", tip: "Menciona herramientas digitales específicas[cite: 93]." },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Qué tipo de tecnología es más importante para ti?", tip: "Identifica un dispositivo clave[cite: 94]." },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Por qué es la tecnología útil en tu vida?", tip: "Habla de rapidez y facilidad[cite: 95]." },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Cómo te comunicas con amigos y familiares que viven otros países?", tip: "Habla sobre videollamadas o mensajes[cite: 96]." },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Cón qué frecuencias usas tu teléfono móvil / celular cada día?", tip: "Usa 'muchas veces', 'constantemente'[cite: 97]." },

    // --- ORGANIZACIÓN SOCIAL ---
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Prefieres vivir en un pueblo o en una ciudad? ¿Por qué?", tip: "Usa 'prefiero... porque...'[cite: 104]." },
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Dónde está la biblioteca más cercana a tu barrio?", tip: "Usa preposiciones de lugar: 'al lado de', 'lejos de'[cite: 105]." },
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Cómo es el lugar donde vives?", tip: "Describe el entorno físico y social[cite: 106]." },
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Te gusta vivir donde vives? ¿Por qué?", tip: "Justifica tus sentimientos sobre tu hogar[cite: 107]." },
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Cómo es tu barrio?", tip: "Usa adjetivos como 'ruidoso', 'tranquilo', 'moderno'[cite: 108]." },
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "En tu opinión, ¿es tu barrio bonito?", tip: "Usa 'Me parece que...'[cite: 109]." },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Cuál es tu asignatura favorita?", tip: "Menciona la materia y el porqué[cite: 111]." },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Te gusta la clase de español? ¿Por qué?", tip: "Habla sobre lo que aprendes[cite: 112]." },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Cómo es tu experiencia en la escuela?", tip: "Resume tu vida escolar[cite: 113]." },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Qué papel piensas que tiene la educación de una persona en la vida?", tip: "Habla sobre el futuro y las oportunidades[cite: 114]." },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Cómo te ha influido la educación IB a ti como persona?", tip: "Usa términos como 'mentalidad abierta'[cite: 115]." },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿En qué te gustaría trabajar en el futuro?", tip: "Usa el condicional: 'Me gustaría ser...'[cite: 117]." },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿Qué profesión piensas que son las más necesitadas?", tip: "Menciona médicos, profesores, etc.[cite: 118]." },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿Qué cualidades debe tener una persona para tener éxito en el trabajo?", tip: "Enumera virtudes profesionales[cite: 119]." },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿Qué lugar de trabajo es para ti el ideal?", tip: "Describe una oficina, un hospital, el aire libre[cite: 120]." },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿A qué se dedican tus padres? ¿Te gustaría tener la misma profesión? ¿Por qué?", tip: "Describe el trabajo de tus padres[cite: 121]." },
    { tema: "Organización social", subtema: "Cuestiones sociales", pregunta: "¿Es más fácil comunicarse con los amigos hoy en día?", tip: "Compara con el pasado[cite: 127]." },
    { tema: "Organización social", subtema: "Cuestiones sociales", pregunta: "¿Perteneces a algún club o grupo social? ¿Cuál? ¿De qué trata?", tip: "Habla sobre tus grupos de interés[cite: 128]." },
    { tema: "Organización social", subtema: "Cuestiones sociales", pregunta: "¿Piensas que es importante pertenecer a un grupo?", tip: "Reflexiona sobre la socialización[cite: 129]." },
    { tema: "Organización social", subtema: "Cuestiones sociales", pregunta: "¿Prefieres realizar actividades individuales o en grupo? ¿Por qué?", tip: "Compara ambas opciones[cite: 130]." },

    // --- CÓMO COMPARTIMOS EL PLANETA ---
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Cómo es el clima en el lugar donde vives?", tip: "Usa expresiones con 'hacer': 'hace sol', 'hace frío'[cite: 138]." },
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Qué tiempo hace normalmente donde vives?", tip: "Describe el tiempo habitual[cite: 139]." },
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Qué tipo de clima prefieres tú? ¿Por qué?", tip: "Usa 'Me gusta el clima...'[cite: 140]." },
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Hay estaciones donde tú vives? ¿Cuáles? ¿Qué tiempo hace normalmente en cada estación?", tip: "Nombra primavera, verano, otoño, invierno[cite: 141]." },
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Qué ropa es necesario llevar ahora para hacer actividades al aire libre en el lugar donde vives? ¿Por qué?", tip: "Nombra prendas de vestir[cite: 142]." },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Hay algún país de Latinoamérica parecido a tu país?", tip: "Compara paisajes[cite: 144]." },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Cómo es la geografia física del lugar donde tú vives?", tip: "Describe montañas, ríos, costas[cite: 145]." },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Qué tipo de paisajes naturales te gustan a ti?", tip: "Usa 'Lo que más me gusta es...'[cite: 146]." },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Has estado alguna vez en un lugar con una geografía especial? ¿Cómo era?", tip: "Usa el pretérito indefinido para describir[cite: 147]." },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Te gusta pasar tiempo en la naturaleza? ¿Por qué?", tip: "Habla sobre actividades al aire libre[cite: 148]." },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Cuál es el problema ecológico más preocupante para ti? ¿Por qué?", tip: "Menciona la contaminación o el cambio climático[cite: 150]." },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Piensas que hay suficientes zonas verdes en el lugar donde vives?", tip: "Usa 'hay' y 'no hay'[cite: 151]." },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Qué crees que podemos hacer para limitar la contaminación en el lugar donde vives?", tip: "Usa 'Deberíamos...'[cite: 152]." },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Qué haces tú o tu familia por el medio ambiente?", tip: "Usa verbos como 'reciclar', 'reutilizar'[cite: 153]." },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Cuáles son los problemas medioambientales que te preocupan?", tip: "Enumera preocupaciones globales[cite: 154]." },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Qué podemos hacer para ayudar al planeta?", tip: "Usa frases imperativas o sugerencias[cite: 155]." },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Qué problemas crees que tiene el mundo?", tip: "Menciona problemas sociales o ambientales[cite: 160]." },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Qué problemas del mundo te preoupan más? ¿Por qué?", tip: "Prioriza un problema y explícalo[cite: 161]." },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Piensas que es necesario ser un ciudadano global? ¿Por qué?", tip: "Reflexiona sobre la responsabilidad[cite: 162]." },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Piensas que es importante la colaboración entre los países?", tip: "Argumenta sobre el trabajo en equipo global[cite: 163]." },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Qué podemos hacer para que el mundo se un lugar mejor?", tip: "Propón soluciones positivas[cite: 164]." }
];

// --- LÓGICA DEL PROGRAMA ---
let timeLeft = 60;
let timerId = null;

const timerDisplay = document.getElementById('timer-display');
const btnGenerate = document.getElementById('generate-btn');
const btnTimerControl = document.getElementById('start-stop-timer');
const btnReset = document.getElementById('reset-timer');
const grammarTip = document.getElementById('grammar-tip');

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (timeLeft <= 10) timerDisplay.classList.add('danger');
    else timerDisplay.classList.remove('danger');
}

function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerId);
            btnTimerControl.innerText = "Finalizado";
        }
    }, 1000);
    btnTimerControl.innerText = "Pausar";
}

btnGenerate.addEventListener('click', () => {
    const selected = document.getElementById('topic-select').value;
    const filtered = selected === "Todos" ? ibData : ibData.filter(i => i.tema === selected);
    const item = filtered[Math.floor(Math.random() * filtered.length)];
    
    document.getElementById('theme-badge').innerText = item.tema;
    document.getElementById('subtopic-badge').innerText = item.subtema;
    document.getElementById('question-text').innerText = item.pregunta;
    grammarTip.innerText = item.tip;

    timeLeft = 60;
    updateTimerDisplay();
    startTimer();
});

btnTimerControl.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        btnTimerControl.innerText = "Reanudar";
    } else {
        startTimer();
    }
});

btnReset.addEventListener('click', () => {
    timeLeft = 60;
    updateTimerDisplay();
});