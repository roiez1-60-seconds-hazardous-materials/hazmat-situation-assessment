'use client'

import { useState } from 'react'
import { 
  Shield, 
  Eye, 
  Users, 
  AlertTriangle, 
  MapPin, 
  Activity,
  Mail,
  Play,
  Info,
  Download,
  FileText,
  Presentation,
  Phone,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  const [selectedChannel, setSelectedChannel] = useState<number | null>(null)
  const [showSimulation, setShowSimulation] = useState(false)
  const [simStep, setSimStep] = useState(0)

  const channels = [
    {
      id: 1,
      name: "ציר שליטה",
      icon: Eye,
      color: "bg-fire-600",
      description: "איסוף מידע מהמקורות השונים",
      details: [
        "מחזיק החומ\"ס",
        "גופים חברים (מד\"א, מ\"י, פקע\"ר)",
        "עוברי אורח", 
        "מידע מבצעי זמין בלפיד"
      ]
    },
    {
      id: 2,
      name: "ציר מקצועי", 
      icon: Users,
      color: "bg-rescue-600",
      description: "מידע משלים על המתקן וסידורי הגנה מאש",
      details: [
        "רמ\"ח הגנה מאש ארצי",
        "רע\"ן חומ\"ס ארצי",
        "רע\"ן הע\"ס ארצי",
        "תיק מפעל/תיק שטח/תיק תכנון מוקדם"
      ]
    },
    {
      id: 3,
      name: "ציר פיקודי",
      icon: Shield, 
      color: "bg-emerald-600",
      description: "מפקדים הנמצאים בזירה להשלמת המידע",
      details: [
        "מפקדים בזירה",
        "מידע דינמי באירוע",
        "עדכון תמ\"צ לאורך הזמן", 
        "מניעת תקלות בבניית תמ\"צ"
      ]
    }
  ]

  const requiredInfo = [
    { icon: MapPin, title: "מיקום וסוג האירוע", desc: "בירור מיקום מדויק, סוג ושם המתקן" },
    { icon: AlertTriangle, title: "זיהוי החומר/ים", desc: "שם החומר, מספר האו\"ם" },
    { icon: Activity, title: "מאפייני הסיכון", desc: "דליפה/שריפה/פיצוץ, דליק/רעיל, גז/נוזל/מוצק" },
    { icon: Users, title: "לכודים", desc: "מספר ומיקום לכודים" },
    { icon: Shield, title: "פעולות מפעליות", desc: "פעולות שבוצעו ע\"י צוותי כיבוי מפעליים" }
  ]

  const simSteps = [
    {
      title: "קבלת הודעה ראשונית",
      content: "מתקבלת הודעה על אירוע חומ\"ס במתקן תעשייתי בחיפה - דליפת אמוניה"
    },
    {
      title: "הפעלת 3 הצירים",  
      content: "איסוף מידע מציר שליטה, מקצועי ופיקודי"
    },
    {
      title: "בניית תמ\"צ",
      content: "איחוד המידע לתמונת מצב ברורה ומקיפה"
    }
  ]

  return (
    <div className="min-h-screen hero-bg relative overflow-hidden">
      {/* Header */}
      <header className="text-center pt-12 pb-8 fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full glass-effect flex items-center justify-center p-4">
            <img
              src="/logo.jpg"
              alt="כבאות והצלה לישראל"
              width="96"
              height="96"
              className="rounded-full"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          גיבוש תמ"צ באירוע
          <span className="block text-yellow-300">חומ"ס</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4">
          כבאות והצלה לישראל
        </p>
        
        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full" />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-7xl">
        
        {/* Three Channels Section */}
        <section className="mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            צירי איסוף וזרימת המידע
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => {
              const IconComponent = channel.icon
              return (
                <div
                  key={channel.id}
                  className={`channel-card glass-effect rounded-2xl p-8 cursor-pointer ${
                    selectedChannel === channel.id ? 'ring-4 ring-white/50' : ''
                  }`}
                  onClick={() => setSelectedChannel(selectedChannel === channel.id ? null : channel.id)}
                >
                  <div className={`w-16 h-16 rounded-xl ${channel.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {channel.name}
                  </h3>
                  
                  <p className="text-white/80 text-lg mb-6">
                    {channel.description}
                  </p>
                  
                  {selectedChannel === channel.id && (
                    <div className="pt-4 border-t border-white/20">
                      <ul className="space-y-3">
                        {channel.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-white/90 text-sm flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Required Information Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            מידע נדרש לתמ"צ ברורה
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {requiredInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">
                    {info.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setShowSimulation(true)}
              className="bg-fire-600 hover:bg-fire-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center gap-3 emergency-pulse transition-colors mx-auto"
            >
              <Play className="w-5 h-5" />
              התחל סימולציית אירוע
            </button>
            
            <button className="bg-rescue-600 hover:bg-rescue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center gap-3 transition-colors mx-auto">
              <Info className="w-5 h-5" />
              מידע נוסף על המערכת
            </button>
          </div>
        </section>

      </main>

      {/* Documents Section */}
      <section className="glass-effect py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            מסמכים רשמיים להורדה
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/presentation.pptx"
              download="גיבוש_תמצ_באירוע_חומס.pptx"
              className="download-card glass-effect rounded-xl p-6 text-white group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-fire-500/20 rounded-lg flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-fire-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">מצגת - גיבוש תמ"צ</h3>
                  <p className="text-white/70 text-sm">האינפוגרפיקה המלאה של צירי המידע</p>
                </div>
                <Download className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="/document.pdf"
              download="תובנות_מגיבוש_תמצ_באירוע_בזן.pdf"
              className="download-card glass-effect rounded-xl p-6 text-white group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rescue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-rescue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">המסמך הרשמי</h3>
                  <p className="text-white/70 text-sm">תובנות מגיבוש תמ"צ - 22.03.26</p>
                </div>
                <Download className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-white/90">
              <Mail className="w-5 h-5" />
              <a href="mailto:roiez1@gmail.com" className="hover:text-white transition-colors">
                roiez1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5" />
              <span>רע"ן חומ"ס ארצי</span>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-4">
            <p className="text-white/70 text-sm mb-2">
              © 2026 כבאות והצלה לישראל - אגף מבצעים, חטיבת תוה"ד/ענף חומ"ס
            </p>
            <p className="text-white/60 text-xs">
              מסמך מספר: 5750-1116-2026-000292 | תאריך: 22 במרץ 2026
            </p>
          </div>
        </div>
      </footer>

      {/* Simple Simulation Modal */}
      {showSimulation && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-fire-600 to-rescue-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">סימולציית אירוע חומ\"ס</h2>
                <button
                  onClick={() => setShowSimulation(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-fire-500 rounded-full flex items-center justify-center text-white text-sm">
                    {simStep + 1}
                  </div>
                  {simSteps[simStep].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {simSteps[simStep].content}
                </p>
              </div>

              {simStep === 1 && (
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {channels.map((channel) => {
                    const IconComponent = channel.icon
                    return (
                      <div key={channel.id} className="border rounded-lg p-4 text-center">
                        <IconComponent className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                        <h4 className="font-semibold">{channel.name}</h4>
                        <p className="text-sm text-gray-600 mt-2">{channel.description}</p>
                      </div>
                    )
                  })}
                </div>
              )}

              {simStep === 2 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    תמונת מצב משולבת
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">מיקום ואופי האירוע:</div>
                      <div>מתקן כימי חיפה - דליפת אמוניה</div>
                    </div>
                    <div>
                      <div className="font-semibold">זיהוי חומר:</div>
                      <div>אמוניה (NH3) - מיכל 500 ליטר</div>
                    </div>
                    <div>
                      <div className="font-semibold">מאפייני סיכון:</div>
                      <div>גז רעיל, אכיל, סכנה לדרכי נשימה</div>
                    </div>
                    <div>
                      <div className="font-semibold">לכודים:</div>
                      <div>אין דיווח על לכודים - אזור פונה</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSimStep(Math.max(0, simStep - 1))}
                  disabled={simStep === 0}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                >
                  שלב קודם
                </button>
                
                <div className="flex gap-2">
                  {simSteps.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === simStep ? 'bg-fire-500' : index < simStep ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setSimStep(Math.min(simSteps.length - 1, simStep + 1))}
                  disabled={simStep === simSteps.length - 1}
                  className="px-6 py-2 bg-fire-600 text-white rounded-lg hover:bg-fire-700 disabled:opacity-50"
                >
                  שלב הבא
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}