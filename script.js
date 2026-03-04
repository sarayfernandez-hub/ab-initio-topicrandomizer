const ibData = [
    // IDENTIDADES
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Cómo es tu personalidad?" },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Cómo eres de carácter?" },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Puedes describirte como persona?" },
    { tema: "Identidades", subtema: "Atributos personales", pregunta: "¿Te consideras un adolescente típico? ¿Por qué?" },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Cómo es tu familia?" },
    { tema: "Identidades", subtema: "Relaciones personales", pregunta: "¿Tienes mascotas o te gustaría tener una?" },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Cuál es tu comida favorita?" },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Qué desayunas normalmente?" },
    { tema: "Identidades", subtema: "Comida y bebida", pregunta: "¿Piensas que eres lo que comes y bebes?" },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Cómo te mantienes en forma?" },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Llevas una vida sana? ¿Por qué?" },
    { tema: "Identidades", subtema: "Bienestar físico", pregunta: "¿Mantienes un buen equilibrio entre actividad física y sedentaria?" },

    // EXPERIENCIAS
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Cómo es un día en tu vida?" },
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Qué haces todas las mañanas antes de ir a la escuela?" },
    { tema: "Experiencias", subtema: "Rutina diaria", pregunta: "¿Prefieres estudiar por las mañanas o por la noche? ¿Por qué?" },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Qué te gusta hacer en tu tiempo libre?" },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Qué deportes practicas?" },
    { tema: "Experiencias", subtema: "Ocio", pregunta: "¿Qué vas a hacer este fin de semana?" },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿A dónde te gusta ir de vacaciones?" },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿Has ido alguna vez a un país hispanohablante? ¿Cómo fue?" },
    { tema: "Experiencias", subtema: "Vacaciones", pregunta: "¿Qué hiciste durante las últimas vacaciones?" },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Cómo celebras normalmente tu cumpleaños?" },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Conoces algún festival del mundo hispano?" },
    { tema: "Experiencias", subtema: "Festivales y celebraciones", pregunta: "¿Piensas que es importante celebrar las tradiciones?" },

    // INGENIO HUMANO
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Cómo vas a la escuela?" },
    { tema: "Ingenio humano", subtema: "Transporte", pregunta: "¿Qué medio de transporte piensas que es el más ecológico?" },
    { tema: "Ingenio humano", subtema: "Entretenimiento", pregunta: "¿Qué prefieres: ver una película en casa o en el cine? ¿Por qué?" },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Qué medios de comunicación usas en tu vida?" },
    { tema: "Ingenio humano", subtema: "Medios de comunicación", pregunta: "¿Lees periódicos o revistas impresas en papel? ¿Por qué?" },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Qué aplicaciones usas para estudiar?" },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Con qué frecuencia usas tu teléfono móvil cada día?" },
    { tema: "Ingenio humano", subtema: "Tecnología", pregunta: "¿Cómo te comunicas con amigos en otros países?" },

    // ORGANIZACIÓN SOCIAL
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Prefieres vivir en un pueblo o en una ciudad? ¿Por qué?" },
    { tema: "Organización social", subtema: "Mi barrio", pregunta: "¿Cómo es el lugar donde vives?" },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Cuál es tu asignatura favorita?" },
    { tema: "Organización social", subtema: "Educación", pregunta: "¿Cómo te ha influido la educación IB a ti como persona?" },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿En qué te gustaría trabajar en el futuro?" },
    { tema: "Organización social", subtema: "Lugar de trabajo", pregunta: "¿A qué se dedican tus padres? ¿Te gustaría hacer lo mismo?" },
    { tema: "Organización social", subtema: "Cuestiones sociales", pregunta: "¿Piensas que es importante pertenecer a un grupo?" },

    // COMPARTIR EL PLANETA
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Qué tiempo hace normalmente donde vives?" },
    { tema: "Cómo compartimos el planeta", subtema: "Clima", pregunta: "¿Qué tipo de clima prefieres tú? ¿Por qué?" },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Cómo es la geografía física del lugar donde tú vives?" },
    { tema: "Cómo compartimos el planeta", subtema: "Geografía física", pregunta: "¿Te gusta pasar tiempo en la naturaleza?" },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Qué haces tú o tu familia por el medio ambiente?" },
    { tema: "Cómo compartimos el planeta", subtema: "Medio ambiente", pregunta: "¿Qué podemos hacer para ayudar al planeta?" },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Qué problemas del mundo te preocupan más?" },
    { tema: "Cómo compartimos el planeta", subtema: "Cuestiones globales", pregunta: "¿Qué podemos hacer para que el mundo sea un lugar mejor?" }
];

let timeLeft = 60;
let timerId = null;

const timerDisplay = document.getElementById('timer-display');
const btnGenerate = document.getElementById('generate-btn');
const btnTimerControl = document.getElementById('start-stop-timer');
const btnReset = document.getElementById('reset-timer');

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 10) {
        timerDisplay.classList.add('danger');
    } else {
        timerDisplay.classList.remove('danger');
    }
}

function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerId);
        }
    }, 1000);
    btnTimerControl.innerText = "Pausar";
}

btnGenerate.addEventListener('click', () => {
    // Lógica de pregunta
    const selected = document.getElementById('topic-select').value;
    const filtered = selected === "Todos" ? ibData : ibData.filter(i => i.tema === selected);
    const item = filtered[Math.floor(Math.random() * filtered.length)];
    
    document.getElementById('theme-badge').innerText = item.tema;
    document.getElementById('subtopic-badge').innerText = item.subtema;
    document.getElementById('question-text').innerText = item.pregunta;

    // Reiniciar cronómetro cada vez que generas pregunta
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