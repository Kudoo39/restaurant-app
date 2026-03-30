import { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { FaComments, FaTimes } from 'react-icons/fa'
import img from '../../../assets/chatbot.jpg'

const ChatBotComponent = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const theme = {
    background: '#faf8f5',
    fontFamily: 'Inter, sans-serif',
    headerBgColor: '#ffc27d',
    headerFontColor: '#1a1a1a',
    headerFontSize: '16px',
    botBubbleColor: '#ffc27d',
    botFontColor: '#1a1a1a',
    userBubbleColor: '#1a1a1a',
    userFontColor: '#ffc27d',
  }

  const steps = [
    {
      id: '1',
      message: t('chat.hello'),
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: t('chat.option1'), trigger: '3' },
        { value: 2, label: t('chat.option2'), trigger: '4' },
        { value: 3, label: t('chat.option3'), trigger: '5' },
      ],
    },
    {
      id: '3',
      message: t('chat.answer1'),
      trigger: '2',
    },
    {
      id: '4',
      message: t('chat.answer2'),
      trigger: '2',
    },
    {
      id: '5',
      message: t('chat.answer3'),
      trigger: '2',
    },
  ]

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white rounded-full shadow-2xl hover:shadow-warm-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-primary"
          aria-label="Open chat"
        >
          <img
            src={img}
            alt="Chatbot"
            className="w-full h-full rounded-full object-cover"
          />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] animate-scale-in">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Custom Header */}
            <div className="bg-gradient-warm p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={img}
                  alt="Chatbot"
                  className="w-10 h-10 rounded-full border-2 border-neutral-black"
                />
                <div>
                  <h3 className="font-heading font-bold text-neutral-black">
                    Saigon Assistant
                  </h3>
                  <p className="text-xs text-neutral-700">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-black/10 hover:bg-neutral-black/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="text-neutral-black" />
              </button>
            </div>

            {/* Chatbot */}
            <ThemeProvider theme={theme}>
              <ChatBot
                steps={steps}
                botAvatar={img}
                hideHeader={true}
                hideSubmitButton={true}
                placeholder="Type a message..."
                style={{
                  width: '100%',
                  height: '400px',
                  boxShadow: 'none',
                }}
              />
            </ThemeProvider>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBotComponent
