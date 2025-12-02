// --- LANGUAGE TRANSLATION DATA ---
const translations = {
    // English (en) - Your current default
    en: {
        // HEADER & NAVIGATION
        'title': 'HazeRadar: 3-Day Smoke Prediction',
        'nav_haze_prediction': 'Haze Prediction',
        'nav_key_matrix': 'Key Matrix',
        'nav_cloud_vision': 'CrowdVision',

        // CONTROL PANEL (Map Sidebar)
        'timeline_header': 'Prediction Timeline',
        'time_now': 'Now',
        'time_3hr': '3hr',
        'time_6hr': '6hr',
        'time_12hr': '12hr',
        'time_1d': '1d',
        'time_2d': '2d',
        'time_3d': '3d',
        'area_list_header': 'Affected Areas (Click to View)',
        'area_list_empty': 'No locations have been liked yet.',

        // METRICS PANEL
        'metrics_header': 'Haze Metrics',
        'metric_current_status': 'Current Status',
        'metric_predicted_aqi': 'Predicted AQI',
        'metric_wind_speed': 'Wind Speed',
        'metric_visibility': 'Visibility',

        // CLOUDVISION PANEL
        'cv_header': 'CrowdVision Insight',
        'cv_explanation': 'Use CrowdVision to see if you are in a safe environment.',
        'cv_browse_link': 'Click to browse',
        'cv_drag_drop': 'or drag and drop',
        'cv_file_type': 'PNG, JPG, or JPEG (Max 5MB per file)',
        'cv_button_analyze': 'Analyze Photo with CrowdVision',
        'cv_button_analyze_count': 'Analyze {count} Photo',
        'api_title_analyzing': 'Analyzing...',
        
        // NEW HAZE INSIGHT KEYS
        'haze_insight_header': 'Haze Insight',
        'haze_insight_text': 'Simulate your own smoke prediction.',
        'haze_insight_button': 'Start Simulation Tool',
        
        // FOOTER & OTHER
        'footer_mission_header': 'Our Team & Mission',
        'footer_mission_text': 'HazeRadar is built by a dedicated team focused on environmental technology and data science. We strive to provide accurate, predictive modeling for smoke and haze events across Southeast Asia. Our platform leverages advanced satellite data and machine learning (CrowdVision) to empower local communities with critical air quality information, promoting public health and informed decision-decision-making.',
        'footer_back_to_map': 'Back to Map',
        'modal_close': 'Close',
        
        // MOCK API RESPONSES (Must use innerHTML for bold)
        'api_unhealthy_severe': 'AQI determined as **Unhealthy**. Outdoor activity is strongly discouraged. Minimize exposure and consider wearing a high-efficiency mask (N95 or higher).',
        'api_unhealthy_sensitive': 'AQI determined as **Unhealthy for Sensitive Groups**. Limit prolonged outdoor exertion. Individuals with respiratory conditions should remain indoors.',
        'api_moderate': 'AQI determined as **Moderate**. Air quality is acceptable; however, unusually sensitive people should consider limiting prolonged outdoor exertion.',
        'api_limit_reached': 'Maximum of {count} files reached. Cannot add more.',
        'api_file_type_error': 'File {name} is not a supported image type (PNG/JPG/JPEG).',
        'api_file_size_limit': 'File {name} exceeds the {size}MB limit.',
        'api_analysis_required': 'Please select files before attempting AI analysis.',
        'api_title_complete': 'CrowdVision Analysis Complete (AQI: {aqi})',
        'api_title_message': 'Message',
    },
    // Bahasa Indonesia (id)
    id: {
        'title': 'HazeRadar: Prediksi Asap 3 Hari',
        'nav_haze_prediction': 'Prediksi Asap',
        'nav_key_matrix': 'Matriks Kunci',
        'nav_cloud_vision': 'CrowdVision',
        
        'timeline_header': 'Garis Waktu Prediksi',
        'time_now': 'Sekarang',
        'time_3hr': '3 jam',
        'time_6hr': '6 jam',
        'time_12hr': '12 jam',
        'time_1d': '1 hari',
        'time_2d': '2 hari',
        'time_3d': '3 hari',
        'area_list_header': 'Area Terdampak (Klik untuk Melihat)',
        'area_list_empty': 'Belum ada lokasi yang disukai.',
        
        'metrics_header': 'Metrik Kabut Asap',
        'metric_current_status': 'Status Saat Ini',
        'metric_predicted_aqi': 'AQI Diprediksi',
        'metric_wind_speed': 'Kecepatan Angin',
        'metric_visibility': 'Jarak Pandang',

        'cv_header': 'Wawasan CrowdVision',
        'cv_explanation': 'Gunakan CrowdVision untuk melihat apakah Anda berada di lingkungan yang aman.',
        'cv_browse_link': 'Klik untuk menelusuri',
        'cv_drag_drop': 'atau seret dan lepas',
        'cv_file_type': 'PNG, JPG, atau JPEG (Maksimal 5MB per file)',
        'cv_button_analyze': 'Analisis Foto dengan CrowdVision',
        'cv_button_analyze_count': 'Analisis {count} Foto',
        'api_title_analyzing': 'Menganalisis...',
        
        // NEW HAZE INSIGHT KEYS
        'haze_insight_header': 'Wawasan Kabut Asap',
        'haze_insight_text': 'Simulasikan prediksi asap Anda sendiri.',
        'haze_insight_button': 'Mulai Alat Simulasi',
        
        'footer_mission_header': 'Tim & Misi Kami',
        'footer_mission_text': 'HazeRadar dibangun oleh tim berdedikasi yang berfokus pada teknologi lingkungan dan ilmu data. Kami berusaha untuk menyediakan pemodelan prediksi yang akurat untuk peristiwa asap dan kabut di seluruh Asia Tenggara. Platform kami memanfaatkan data satelit canggih dan pembelajaran mesin (CrowdVision) untuk memberdayakan komunitas lokal dengan informasi kualitas udara yang penting, mempromosikan kesehatan masyarakat dan pengambilan keputusan yang terinformasi.',
        'footer_back_to_map': 'Kembali ke Peta',
        'modal_close': 'Tutup',

        'api_unhealthy_severe': 'AQI ditetapkan sebagai **Tidak Sehat**. Aktivitas di luar ruangan sangat tidak dianjurkan. Minimalkan paparan dan pertimbangkan untuk memakai masker efisiensi tinggi (N95 atau lebih tinggi).',
        'api_unhealthy_sensitive': 'AQI ditetapkan sebagai **Tidak Sehat untuk Kelompok Sensitif**. Batasi aktivitas fisik berat di luar ruangan. Individu dengan kondisi pernapasan harus tetap di dalam ruangan.',
        'api_moderate': 'AQI ditetapkan sebagai **Sedang**. Kualitas udara dapat diterima; namun, orang yang sangat sensitif harus mempertimbangkan untuk membatasi aktivitas fisik berat di luar ruangan.',
        'api_limit_reached': 'Maksimal {count} file tercapai. Tidak dapat menambahkan lagi.',
        'api_file_type_error': 'File {name} bukan jenis gambar yang didukung (PNG/JPG/JPEG).',
        'api_file_size_limit': 'File {name} melebihi batas {size}MB.',
        'api_analysis_required': 'Harap pilih file sebelum mencoba analisis AI.',
        'api_title_complete': 'Analisis CrowdVision Selesai (AQI: {aqi})',
        'api_title_message': 'Pesan',
    },
    // Javanese (jv) - Replacing Hindi
    jv: {
        'title': 'HazeRadar: Predhiksi Asep 3 Dinten',
        'nav_haze_prediction': 'Predhiksi Asep',
        'nav_key_matrix': 'Matriks Utama',
        'nav_cloud_vision': 'CrowdVision',
        
        'timeline_header': 'Garis Wektu Predhiksi',
        'time_now': 'Saiki',
        'time_3hr': '3 jam',
        'time_6hr': '6 jam',
        'time_12hr': '12 jam',
        'time_1d': '1 dinten',
        'time_2d': '2 dinten',
        'time_3d': '3 dinten',
        'area_list_header': 'Wilayah Kena (Klik Kanggo Delok)',
        'area_list_empty': 'Durung ana panggonan sing disenengi.',

        'metrics_header': 'Metrik Kabut Asep',
        'metric_current_status': 'Status Saiki',
        'metric_predicted_aqi': 'AQI Dipredhiksi',
        'metric_wind_speed': 'Kacepetan Angin',
        'metric_visibility': 'Jarak Pandang',
        
        'cv_header': 'Wawasan CrowdVision',
        'cv_explanation': 'Gunakake CrowdVision kanggo ndeleng menawi sampeyan ana ing lingkungan sing aman.',
        'cv_browse_link': 'Klik kanggo ndeleng',
        'cv_drag_drop': 'utawa seret lan culake',
        'cv_file_type': 'PNG, JPG, utawa JPEG (Maksimal 5MB saben file)',
        'cv_button_analyze': 'Analisis Foto karo CrowdVision',
        'cv_button_analyze_count': 'Analisis {count} Foto',
        'api_title_analyzing': 'Nganalisis...',
        
        // NEW HAZE INSIGHT KEYS
        'haze_insight_header': 'Wawasan Kabut Asep',
        'haze_insight_text': 'Simulasèkake prédisi asep panjenengan dhéwé.',
        'haze_insight_button': 'Miwiti Piranti Simulasi',
        
        'footer_mission_header': 'Tim lan Misi Kita',
        'footer_mission_text': 'HazeRadar digawe dening tim khusus sing fokus ing teknologi lingkungan lan ilmu data. Kita ngupayakake nyedhiyakake modhèl prediksi sing akurat kanggo kedadeyan asep lan kabut ing saindhènging Asia Kidul-Wétan. Platform kita nggunakake data satelit majeng lan pambelajaran mesin (CrowdVision) kanggo menehi informasi kualitas udara sing penting marang komunitas lokal, ningkatake kesehatan masyarakat lan njupuk keputusan sing informatif.',
        'footer_back_to_map': 'Bali menyang Peta',
        'modal_close': 'Tutup',
        
        'api_unhealthy_severe': 'AQI ditemtokake minangka **Ora Sehat**. Aktivitas njaba omah banget ora dianjurake. Kurangi paparan lan pertimbangake nganggo topeng efisiensi dhuwur (N95 utluwih dhuwur).',
        'api_unhealthy_sensitive': 'AQI ditemtokake minangka **Ora Sehat kanggo Klompok Sensitif**. Watesi aktivitas fisik abot ing njaba omah. Individu kanthi kondisi ambegan kudu tetep ing njero omah.',
        'api_moderate': 'AQI ditemtokake minangka **Sedheng**. Kualitas udara bisa ditampa; nanging, wong sing sensitif banget kudu nimbang matesi aktivitas fisik abot ing njaba omah.',
        'api_limit_reached': 'Maksimal {count} file wis kecukupan. Ora bisa nambah maneh.',
        'api_file_type_error': 'File {name} dudu jinis gambar sing didhukung (PNG/JPG/JPEG).',
        'api_file_size_limit': 'File {name} ngluwihi wates {size}MB.',
        'api_analysis_required': 'Mangga pilih file sadurunge nyoba analisis AI.',
        'api_title_complete': 'Analisis CrowdVision Rampung (AQI: {aqi})',
        'api_title_message': 'Pesen',
    }
};
// --- END LANGUAGE TRANSLATION DATA ---

// Define buffered bounds for Indonesia
const INDONESIA_BOUNDS = [
    [-12, 90], 
    [7, 145]  
];

// Define the 7 time periods (mapping slider value 1-7 to a label)
const TIME_PERIODS = {
    1: "Now",
    2: "3hr",
    3: "6hr",
    4: "12hr",
    5: "1d",
    6: "2d",
    7: "3d"
};

// Mock data assuming you have a list of affected locations
const affectedAreasData = [
    { id: 1, name: "Kota Bandung", province: "Jawa Barat", lat: -6.9175, lng: 107.6191, aqi: 102, status: 'Moderate' },
    { id: 2, name: "Kota Surabaya", province: "Jawa Timur", lat: -7.2575, lng: 112.7521, aqi: 78, status: 'Good' },
    { id: 3, name: "Kota Medan", province: "Sumatera Utara", lat: 3.5952, lng: 98.6775, aqi: 155, status: 'Unhealthy' },
    { id: 4, name: "Kota Denpasar", province: "Bali", lat: -8.6705, lng: 115.2127, aqi: 45, status: 'Good' },
    { id: 5, name: "Kabupaten Raja Ampat", province: "Papua Barat Daya", lat: -0.528, lng: 130.824, aqi: 22, status: 'Good' },
];

// Map instance variable
let map; 
let currentTileLayer;
let geoJsonLayer;

// --- HAZE GNN API CONFIG (MAP BACKEND) ---
const HAZE_API_BASE_URL = window.NEXT_PUBLIC_API_URL || 'https://gnn_model-haze-radargnnmodel-production.up.railway.app' ;

const hazeAPI = {
    // Health check
    async getHealth() {
        const response = await fetch(`${HAZE_API_BASE_URL}/health`);
        return response.json();
    },

    // Single prediction (per lokasi / provinsi)
    async getPrediction(data) {
        const response = await fetch(`${HAZE_API_BASE_URL}/predict`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.json();
    },

    // 72-hour forecast (kalau nanti mau dipakai overlay)
    async getForecast(hours = 72) {
        const response = await fetch(`${HAZE_API_BASE_URL}/forecast`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hours, include_uncertainty: true })
        });
        return response.json();
    },

    // Haze Horizon simulation (klik peta untuk simulasi kebakaran, bisa ditambah belakangan)
    async simulateFire(lat, lng, intensity, hours = 24) {
        const response = await fetch(`${HAZE_API_BASE_URL}/haze-horizon`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fire_latitude: lat,
                fire_longitude: lng,
                fire_intensity: intensity,
                simulation_hours: hours
            })
        });
        return response.json();
    }
};

function getRegionKeyFromFeature(feature) {
    const props = feature.properties || {};
    return (
        props.KODE_KAB ||
        props.KABUPATEN ||
        props.KODE_PROV ||
        props.PROVINSI ||
        feature.id
    );
}

// Bangun HTML kecil yang disisipkan ke dalam popup
function buildRegionAnalysisHTML(analysis) {
    if (!analysis) return '';

    // Kalau backend ngirim di field "prediction", gunakan itu; kalau tidak, pakai objeknya langsung
    const result = analysis.prediction || analysis;

    const pm25 = result.predicted_pm25 ?? result.pm25 ?? result.pm_25;
    const aqi = result.predicted_aqi ?? result.aqi;
    const category = result.category || result.aqi_category;
    const confidence = result.confidence ?? result.model_confidence;
    const note = result.health_message || result.health_advice || '';

    const hasCore = pm25 != null || aqi != null || category || confidence != null || note;

    // Fallback: kalau struktur data beda, tampilkan raw JSON
    if (!hasCore) {
        return `
            <hr class="popup-divider" />
            <div class="popup-subheader">GNN Haze Insight</div>
            <pre class="popup-raw-json">${JSON.stringify(result, null, 2)}</pre>
        `;
    }

    let html = `
        <hr class="popup-divider" />
        <div class="popup-subheader">GNN Haze Insight</div>
        <ul class="popup-metric-list">
    `;

    if (aqi != null) {
        html += `<li><span>AQI (predicted)</span><span>${aqi}</span></li>`;
    }
    if (pm25 != null) {
        html += `<li><span>PM2.5</span><span>${pm25} µg/m³</span></li>`;
    }
    if (category) {
        html += `<li><span>Category</span><span>${category}</span></li>`;
    }
    if (confidence != null) {
        html += `<li><span>Model confidence</span><span>${confidence}%</span></li>`;
    }
    html += `</ul>`;

    if (note) {
        html += `<p class="popup-note">${note}</p>`;
    }

    return html;
}

async function fetchRegionAnalysisForLayer(feature, layer) {
    const key = getRegionKeyFromFeature(feature);
    if (!key || !map) return;

    // Sudah pernah di-request: langsung pakai cache
    if (regionAnalysisCache.has(key)) {
        const cached = regionAnalysisCache.get(key);
        const html = buildRegionAnalysisHTML(cached);
        if (html && layer.basePopupContent) {
            layer.setPopupContent(layer.basePopupContent + html);
        }
        return;
    }

    try {
        const bounds = layer.getBounds();
        const center = bounds.getCenter();

        // Payload minimal: lat / lng; kamu bisa tambah param lain sesuai backend
        const payload = {
            latitude: center.lat,
            longitude: center.lng,
            hours_ahead: 24,
            include_uncertainty: true
        };

        const prediction = await hazeAPI.getPrediction(payload);
        regionAnalysisCache.set(key, prediction);

        const html = buildRegionAnalysisHTML(prediction);
        if (html && layer.basePopupContent) {
            layer.setPopupContent(layer.basePopupContent + html);
        }
    } catch (err) {
        console.error('Failed to fetch GNN haze analysis for region:', err);
    }
}

// Cache analisis per provinsi (supaya 1 provinsi tidak berkali-kali call API)
const regionAnalysisCache = new Map();


// Define the dark and light tile layers
const DARK_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const LIGHT_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


// --- DOM ELEMENTS ---
const mapContainer = document.getElementById('map');
const messageOverlay = document.getElementById('message-overlay');
const messageText = document.getElementById('message-text');
const loadingSpinner = document.getElementById('loading-spinner');
const slider = document.getElementById('notch-slider');
const timeLabel = document.getElementById('time-label');

// UPLOADER ELEMENTS
const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const fileList = document.getElementById('file-list');
const uploadButton = document.getElementById('upload-button');
const modalCloseBtn = document.getElementById('modal-close-btn');

// DROPDOWN ELEMENTS
const dropdownToggle = document.getElementById('dropdown-toggle');
const headerDropdownMenu = document.getElementById('header-dropdown-menu');
const dropdownIcon = document.getElementById('dropdown-icon');

// NEW LANGUAGE ELEMENTS
const languageToggle = document.getElementById('language-toggle');
const languageDropdownMenu = document.getElementById('language-dropdown-menu');

// NEW THEME ELEMENTS
const themeToggle = document.getElementById('theme-toggle');
const themeIconMoon = document.getElementById('theme-icon-moon');
const themeIconSun = document.getElementById('theme-icon-sun');

// Set up main elements
const html = document.documentElement;
let uploadedFiles = []; // Array to store files ready for upload


// --- MODAL / MESSAGE BOX FUNCTIONS ---
function showMessage(titleKey, textKey, titleReplacements = {}, textReplacements = {}) {
    const title = t(titleKey, titleReplacements); 
    const text = t(textKey, textReplacements);
    
    const modal = document.getElementById('confirmation-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').innerHTML = text; // Use innerHTML for bold formatting
    modal.classList.remove('invisible', 'opacity-0');
    modal.classList.add('visible', 'opacity-100');
}

function hideMessage() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('visible', 'opacity-100');
    modal.classList.add('invisible', 'opacity-0');
}


// --- LANGUAGE LOGIC ---
const LANGUAGE_STORAGE_KEY = 'userLanguage';
let currentLang = 'jv'; 

/** Looks up and returns the translated string for a given key. */
function t(key, replacements = {}) {
    let text = translations[currentLang]?.[key] || translations.en[key] || `[${key}]`;
    
    for (const [placeholder, value] of Object.entries(replacements)) {
        text = text.replace(new RegExp(`{${placeholder}}`, 'g'), value);
    }
    return text;
}

/** Applies translations to all elements with data-i18n attribute. */
function applyTranslations() {
    document.querySelector('title').textContent = t('title');
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        if (key === 'cv_button_analyze' || key === 'cv_button_analyze_count') {
            return;
        }

        if (key === 'time_now') { 
            const timeLabels = ['time_now', 'time_3hr', 'time_6hr', 'time_12hr', 'time_1d', 'time_2d', 'time_3d'];
            const spans = document.querySelector('.time-markers-container').children;
            timeLabels.forEach((tKey, index) => {
                 if (spans[index]) spans[index].textContent = t(tKey);
            });
            return;
        }

        el.textContent = t(key);
    });
    
    updatePredictionUI(TIME_PERIODS[slider.value]);
    renderAffectedAreas(affectedAreasData);
    renderFileList();
}

/** Loads language preference from local storage or defaults to 'jv'. */
function loadLanguage() {
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLang && translations[storedLang]) {
        currentLang = storedLang;
    } else {
        currentLang = 'jv'; 
    }
    applyTranslations();
}

/** Handles the click on a language link. */
function setLanguage(langCode) {
    if (currentLang === langCode) return;
    
    currentLang = langCode;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
    applyTranslations();
    languageDropdownMenu.classList.remove('is-open');
}


// --- THEME TOGGLE LOGIC ---

/** Updates the visible theme icon based on the mode. */
function updateThemeIcons(isDarkMode) {
    if (isDarkMode) {
        themeIconMoon.classList.remove('hidden');
        themeIconSun.classList.add('hidden');
    } else {
        themeIconMoon.classList.add('hidden');
        themeIconSun.classList.remove('hidden');
    }
}

let toggleTheme = function() {
    const isCurrentlyDark = html.classList.contains('dark');
    
    if (isCurrentlyDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcons(false);
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcons(true);
    }
    updateMapTheme(); // Ensure map tiles update immediately
};

/** Loads theme preference from local storage or defaults to dark. */
function loadTheme() {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkMode) {
        html.classList.add('dark');
        updateThemeIcons(true);
    } else {
        html.classList.remove('dark');
        updateThemeIcons(false);
    }
}


// --- NAVIGATION LOGIC ---

// Main Menu Toggle (Full Width)
function toggleDropdown(event) {
    event.stopPropagation(); 
    
    const isOpen = headerDropdownMenu.classList.contains('is-open');
    
    if (isOpen) {
        headerDropdownMenu.classList.remove('is-open');
        dropdownIcon.classList.remove('rotate-180');
        dropdownToggle.classList.remove('is-open');
    } else {
        if (languageDropdownMenu.classList.contains('is-open')) {
            languageDropdownMenu.classList.remove('is-open');
        }
        headerDropdownMenu.classList.add('is-open');
        dropdownIcon.classList.add('rotate-180');
        dropdownToggle.classList.add('is-open');
    }
}

// Language Menu Toggle (Small Width)
function toggleLanguageDropdown(event) {
    event.stopPropagation();
    
    const isOpen = languageDropdownMenu.classList.contains('is-open');
    
    if (isOpen) {
        languageDropdownMenu.classList.remove('is-open');
    } else {
        if (headerDropdownMenu.classList.contains('is-open')) {
            toggleDropdown({stopPropagation: () => {}}); 
        }
        languageDropdownMenu.classList.add('is-open');
    }
}

// Smooth scrolling logic
function smoothScroll(event) {
    event.preventDefault();
    
    if (headerDropdownMenu.classList.contains('is-open')) {
        headerDropdownMenu.classList.remove('is-open');
        dropdownIcon.classList.remove('rotate-180');
        dropdownToggle.classList.remove('is-open');
    }

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerOffset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}


// --- MAP & UI LOGIC ---
function initializeMap() {
    if (!mapContainer) {
        console.error("Map container 'map' not found.");
        messageText.innerText = "Error: Map container not found.";
        loadingSpinner.style.display = 'none';
        return;
    }

    map = L.map('map').setView([-2.5489, 118.0149], 5);
    updateMapTheme(); 
    
    const bandungCoords = [-6.9175, 107.6191];
    L.circleMarker(bandungCoords, {
        radius: 10,
        color: '#22d3ee',
        fillColor: '#67e8f9',
        fillOpacity: 0.7,
        weight: 2
    })
    .addTo(map)
    .bindPopup("<div class='popup-header'>Bandung (Jawa Barat)</div><p>Mock AQI: 102 (Moderate)</p>");

    loadGeoJson();
}

/** Switches the map tile layer to match the current theme. */
function updateMapTheme() {
    if (!map) return;
    const isDarkMode = html.classList.contains('dark');
    const newUrl = isDarkMode ? DARK_TILE_LAYER : LIGHT_TILE_LAYER;

    if (currentTileLayer) {
        map.removeLayer(currentTileLayer);
    }

    currentTileLayer = L.tileLayer(newUrl, {
        attribution: ATTRIBUTION,
        maxZoom: 18,
    }).addTo(map);
    
    console.log(`Map switched to ${isDarkMode ? 'Dark' : 'Light'} theme layer.`);
}

function updatePredictionUI(timePeriod) {
    timeLabel.textContent = t(`time_${timePeriod.toLowerCase().replace('hr', 'hr').replace('d', 'd').replace('now', 'now')}`);

    const sliderValue = parseInt(slider.value);
    const currentAQI = 100 + (sliderValue - 4) * 20 + Math.floor(Math.random() * 10); 
    document.getElementById('metric-predicted-aqi').textContent = currentAQI;
    
    let status = 'Moderate';
    let statusClass = 'text-yellow'; 
    
    if (currentAQI > 200) { status = 'Hazardous'; statusClass = 'text-purple'; }
    else if (currentAQI > 150) { status = 'Unhealthy'; statusClass = 'text-red'; }
    else if (currentAQI > 100) { status = 'Moderate'; statusClass = 'text-yellow'; }
    else { status = 'Good'; statusClass = 'text-teal'; }

    const statusEl = document.getElementById('metric-current-haze');
    statusEl.textContent = status; 
    statusEl.className = `metric-value ${statusClass}`; 
    
    console.log(`Map visualization needs update for time: ${timePeriod}`);
}

function handleSliderChange(event) {
    const sliderValue = event.target.value;
    const timePeriod = TIME_PERIODS[sliderValue]; 
    updatePredictionUI(timePeriod);
}


// --- GEOJSON AND LIST LOGIC ---
const defaultStyle = {
    color: "#a5f3fc", 
    weight: 1,
    opacity: 0.8,
    fillColor: "#14b8a6", 
    fillOpacity: 0.4
};

const highlightStyle = {
    color: "#fde047", 
    weight: 2,
    opacity: 1,
    fillColor: "#facc15", 
    fillOpacity: 0.7
};



function onEachFeature(feature, layer) {
    let popupContent = '';
    const props = feature.properties;
    const name =
        props.NAMA_KAB ||
        props.NAMA_KOTA ||
        props.NAME ||
        props.nama ||
        props.Name ||
        props.PROVINSI;

    if (name) {
        popupContent += `<div class="popup-header">${name}</div>`;
    } else {
        popupContent += `<div class="popup-header">GeoJSON Feature</div>`;
    }

    if (props) {
        popupContent += '<table class="popup-content-table">';
        for (const key in props) {
            if (key.startsWith('_') || key === 'id' || key === 'bbox') continue;
            popupContent += `
                <tr>
                    <td>${key}</td>
                    <td>${props[key]}</td>
                </tr>
            `;
        }
        popupContent += '</table>';
    } else {
        popupContent += '<p>No properties found for this feature.</p>';
    }

    // Bind popup awal + simpan base content untuk ditambah GNN
    layer.bindPopup(popupContent, { maxHeight: 220 });
    layer.basePopupContent = popupContent;

    layer.on({
        mouseover: function (e) {
            const l = e.target;
            l.setStyle(highlightStyle);
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                l.bringToFront();
            }

            // Buka popup & tampilkan status "Loading..." dulu
            l.openPopup();
            if (!l._gnnRequested) {
                l._gnnRequested = true;
                l.setPopupContent(
                    l.basePopupContent +
                    `<hr class="popup-divider"><div class="popup-subheader">GNN Haze Insight</div><p class="popup-note">Loading analysis...</p>`
                );
                fetchRegionAnalysisForLayer(feature, l);
            }
        },
        mouseout: function (e) {
            if (geoJsonLayer) {
                geoJsonLayer.resetStyle(e.target);
            }
        },
        click: function (e) {
            map.flyTo(e.latlng, 10, { duration: 0.8 });
        }
    });
}

function renderAffectedAreas(data) {
    const listContainer = document.getElementById('affected-areas-list');
    const noCardsMessage = document.getElementById('no-cards-message');
    listContainer.innerHTML = '';
    
    if (data.length === 0) {
        noCardsMessage.classList.remove('hidden');
        return;
    }
    noCardsMessage.classList.add('hidden');
    
    data.forEach(item => {
        const statusClass = item.status === 'Unhealthy' ? 'text-red' : 
                                item.status === 'Moderate' ? 'text-yellow' : 'text-teal';
                                
        const cardHtml = `
            <div data-lat="${item.lat}" data-lng="${item.lng}"
                class="card-item group hover:shadow-lg">
                <div>
                    <p>${item.name}</p>
                    <p class="text-sm">${item.province}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm font-bold ${statusClass}">${item.status}</p> 
                    <p class="text-xs text-gray-500 dark:text-gray-400">AQI: ${item.aqi}</p>
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    document.querySelectorAll('.card-item').forEach(card => {
        card.addEventListener('click', function() {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            
            map.flyTo([lat, lng], 10, {
                duration: 1.5
            });
            
            this.classList.add('ring-4', 'ring-cyan-500', 'ring-opacity-50');
            setTimeout(() => {
                this.classList.remove('ring-4', 'ring-cyan-500', 'ring-opacity-50');
            }, 1000);
        });
    });
}


async function loadGeoJson() {
    try {
        const response = await fetch('kabupaten.JSON');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. The GeoJSON file 'kabupaten.JSON' could not be loaded.`);
        }
        
        const data = await response.json();
        
        geoJsonLayer = L.geoJSON(data, {
            style: defaultStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
        
        map.fitBounds(geoJsonLayer.getBounds());
        
        map.setMaxBounds(INDONESIA_BOUNDS);
        
        const minZoomLevel = map.getZoom();
        map.setMinZoom(minZoomLevel);
        
        messageOverlay.style.display = 'none';

        map.invalidateSize(); 

    } catch (error) {
        console.error('Error loading or parsing GeoJSON:', error);
        messageText.innerText = `Error loading map data: ${error.message}. Please ensure 'kabupaten.JSON' is available.`;
        loadingSpinner.style.display = 'none';
        messageOverlay.style.backgroundColor = 'rgba(127, 29, 29, 0.85)';
        messageText.style.color = '#fca5a5';
    }
}


// --- FILE UPLOADER LOGIC ---

// Helper function to format file size
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Renders the list of files to be uploaded
function renderFileList() {
    fileList.innerHTML = '';
    if (uploadedFiles.length === 0) {
        uploadButton.disabled = true;
        uploadButton.textContent = t('cv_button_analyze'); 
        return;
    }
    
    uploadButton.disabled = false;
    
    const count = uploadedFiles.length;
    let buttonText = t('cv_button_analyze_count', { count: count });
    if (currentLang === 'en' && count !== 1) {
        buttonText += 's';
    }
    uploadButton.textContent = buttonText;


    uploadedFiles.forEach((file, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'file-list-item';
        listItem.innerHTML = `
            <div class="file-list-item-info">
                <svg xmlns="http://www.w3.org/2000/svg" class="file-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
                <span class="file-name">${file.name}</span>
            </div>
            <div class="file-size-info">
                <span class="file-size-text">${formatBytes(file.size)}</span>
                <button data-index="${index}" class="remove-file-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        `;
        fileList.appendChild(listItem);
    });

    document.querySelectorAll('.remove-file-btn').forEach(button => {
        button.addEventListener('click', function() {
            const indexToRemove = parseInt(this.getAttribute('data-index'));
            uploadedFiles.splice(indexToRemove, 1);
            renderFileList();
        });
    });
}

// Process files from either drag/drop or input click
// Process files from either drag/drop or input click
function handleFiles(files) {
    const maxFiles = 1; // kita analisis satu foto per kali jalan
    const maxSizeMB = 5;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.startsWith('image/')) {
            // kalau sebelumnya pakai showMessage, bisa di-skip atau dibiarkan
            // showMessage('api_title_message', 'api_file_type_error', {}, { name: file.name });
            continue;
        }

        if (file.size > maxSizeBytes) {
            // showMessage('api_title_message', 'api_file_size_limit', {}, { name: file.name, size: maxSizeMB });
            continue;
        }

        if (uploadedFiles.length < maxFiles) {
            // Selalu pakai foto terbaru sebagai target analisis
            uploadedFiles = [file];
        } else {
            // showMessage('api_title_message', 'api_limit_reached', {}, { count: maxFiles });
            break;
        }
    }

    // --- UPDATE PREVIEW ---
    const previewImg = document.getElementById('preview');
    if (previewImg) {
        if (uploadedFiles.length > 0) {
            previewImg.src = URL.createObjectURL(uploadedFiles[0]);
            previewImg.classList.remove('hidden');
        } else {
            previewImg.classList.add('hidden');
            previewImg.src = '';
        }
    }

    // --- RESET HASIL ANALISIS SEBELUMNYA ---
    const resultBox = document.getElementById('result');
    if (resultBox) {
        resultBox.innerHTML = '';          // hapus teks hasil lama
        resultBox.classList.add('hidden'); // sembunyikan sampai analisis berikutnya
    }

    // Kembalikan teks tombol ke default (kalau sebelumnya sempat "Analyzing...")
    uploadButton.textContent = t('cv_button_analyze');

    // Reset input & render ulang daftar file
    fileElem.value = '';
    renderFileList(); // fungsi ini yang mengatur disabled/enabled tombol berdasarkan uploadedFiles
}



// --- MOCK API INTEGRATION FUNCTION ---
async function uploadFile() {
    // --- CrowdVision suggestions (based on prediction) ---
    const CROWDVISION_SUGGESTIONS_HAZY = [
        "Limit outdoor activities.",
        "Wear a mask if you need to go outside.",
        "Keep windows and doors closed to reduce smoke.",
        "Follow official air quality updates.",
        "Drink plenty of water and rest well."
    ];

    const CROWDVISION_SUGGESTIONS_CLEAR = [
        "Air is relatively clean, enjoy outdoor activities wisely.",
        "Open windows to improve indoor air circulation.",
        "Stay prepared in case conditions change suddenly.",
        "Protect your lungs by avoiding smoke exposure.",
        "Share air quality information with people around you."
    ];


    if (uploadedFiles.length === 0) {
        return;
    }

    const fileToAnalyze = uploadedFiles[0];
    const formData = new FormData();
    formData.append("image", fileToAnalyze);

    // Update state tombol
    uploadButton.textContent = t('api_title_analyzing');
    uploadButton.disabled = true;

    const resultBox = document.getElementById('result');
    if (resultBox) {
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = '⏳ Analyzing...';
    }

    try {
        const response = await fetch("https://haze-radarcrowdvision-production.up.railway.app/predict", {
            method: "POST",
            body: formData
        });

        // Baca sebagai text dulu
        const rawText = await response.text();

        if (!response.ok) {
            // Kalau status 4xx/5xx, tunjukkan info status + sedikit isi body
            const snippet = rawText.slice(0, 200);
            throw new Error(`Server error (${response.status}): ${snippet}`);
        }

        let data;
        try {
            data = JSON.parse(rawText);
        } catch (e) {
            // Kalau bukan JSON, tampilkan cuplikan respon
            const snippet = rawText.slice(0, 200);
            throw new Error(`Server returned non-JSON response: ${snippet}`);
        }

        console.log('CrowdVision response:', data);

        if (!data || data.success === false) {
            const errorMessage = data?.error || 'Unknown error.';
            if (resultBox) {
                resultBox.innerHTML = "⚠️ Analysis failed: " + errorMessage;
            }
            return;
        }

        // Ambil nilai dari API
        // Ambil nilai dari API
        const prediction = data.prediction || 'Unknown';
        const confidence = data.confidence ?? null;           // tidak akan ditampilkan
        const visibilityScore = data.visibility_score ?? null;
        const metrics = data.metrics || {};
        const contrast = metrics.contrast ?? null;            // tidak akan ditampilkan
        const edgeDensity = metrics.edge_density ?? null;
        const brightness = metrics.brightness ?? null;

        // Tentukan daftar saran berdasarkan prediction
        let suggestions = [];
        const predLower = (prediction || '').toLowerCase();

        if (
            predLower.includes('haze') ||
            predLower.includes('hazy') ||
            predLower.includes('smoke')
        ) {
            suggestions = CROWDVISION_SUGGESTIONS_HAZY;
        } else if (predLower.includes('clear')) {
            suggestions = CROWDVISION_SUGGESTIONS_CLEAR;
        }


        // === Bangun HTML hasil analisis dengan gaya card CloudVision ===
        let html = `
                <div class="cv-result-header">
                    <div class="cv-result-icon">✔</div>
                    <div>
                        <div class="cv-result-title">Analysis Complete</div>
                        <div class="cv-result-subtitle">
                            ${
                                visibilityScore !== null
                                    ? `Estimated visibility score: <span class="cv-chip">${visibilityScore}</span>`
                                    : 'Latest CrowdVision snapshot'
                            }
                        </div>
                    </div>
                </div>

                <div class="cv-result-grid">
                    <div class="cv-result-item">
                        <span class="cv-label">Prediction</span>
                        <span class="cv-value">${prediction}</span>
                    </div>
                    ${
                        edgeDensity !== null
                            ? `
                    <div class="cv-result-item">
                        <span class="cv-label">Edge Density</span>
                        <span class="cv-value">${edgeDensity}%</span>
                    </div>` : ''
                    }
                </div>

                ${
                    suggestions.length
                        ? `
                <div class="cv-divider"></div>
                <div class="cv-result-suggestions">
                    <span class="cv-label">You Must :</span>
                    <ul class="cv-suggestions-list">
                        ${suggestions.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                ` : ''
                }
            `;



        if (resultBox) {
            resultBox.innerHTML = html;
        }

    } catch (error) {
        console.error('CrowdVision error:', error);
        if (resultBox) {
            resultBox.innerHTML = "⚠️ Analysis failed: " + error.message;
        }
    } finally {
        uploadButton.disabled = false;
        uploadButton.textContent = t('cv_button_analyze');
        uploadedFiles = [];
        renderFileList();
    }
}




// Drag-and-Drop Handlers
function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    dropArea.classList.add('drop-area:hover'); 
}

function unhighlight(e) {
    dropArea.classList.remove('drop-area:hover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}


// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', function () {
    
    // Load state
    loadTheme();
    loadLanguage(); 
    initializeMap();

    // Map Slider
    slider.addEventListener('input', handleSliderChange);
    updatePredictionUI(TIME_PERIODS[slider.value]);

    // Modals
    modalCloseBtn.addEventListener('click', hideMessage);

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation
    dropdownToggle.addEventListener('click', toggleDropdown);
    languageToggle.addEventListener('click', toggleLanguageDropdown);
    document.querySelectorAll('.nav-link-dropdown').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    document.addEventListener('click', function(event) {
        const isClickOnToggle = dropdownToggle.contains(event.target);
        const isClickOnMenu = headerDropdownMenu.contains(event.target);
        const isClickOnLangToggle = languageToggle.contains(event.target);
        const isClickOnLangMenu = languageDropdownMenu.contains(event.target);

        if (headerDropdownMenu.classList.contains('is-open') && !isClickOnToggle && !isClickOnMenu) {
            headerDropdownMenu.classList.remove('is-open');
            dropdownIcon.classList.remove('rotate-180');
            dropdownToggle.classList.remove('is-open');
        }

        if (languageDropdownMenu.classList.contains('is-open') && !isClickOnLangToggle && !isClickOnLangMenu) {
            languageDropdownMenu.classList.remove('is-open');
        }
    });
    
    languageDropdownMenu.querySelectorAll('a[data-lang]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const langCode = this.getAttribute('data-lang');
            setLanguage(langCode);
        });
    });

    // File Uploader
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });
    dropArea.addEventListener('drop', handleDrop, false);
    fileElem.addEventListener('change', function(e) {
        handleFiles(e.target.files);
    });
    uploadButton.addEventListener('click', uploadFile);
});