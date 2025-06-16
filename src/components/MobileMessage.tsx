
import { Smartphone, MousePointer2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MobileMessage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center bg-gray-900/80 border-gray-700 backdrop-blur-lg">
        <div className="mb-6">
          <div className="relative mx-auto w-20 h-20 mb-4">
            <Smartphone className="w-16 h-16 text-blue-400 mx-auto" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <MousePointer2 className="w-4 h-4 text-white transform rotate-12" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Oops! Cursors Are Desktop Only
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Our cursor experiments need a mouse to shine! ✨ 
            <br />
            Please visit us on a desktop or laptop computer to experience the full magic.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg text-sm text-gray-400">
            <MousePointer2 className="w-5 h-5 text-purple-400" />
            <span>Mouse tracking required</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg text-sm text-gray-400">
            <ArrowLeft className="w-5 h-5 text-blue-400" />
            <span>Hover interactions needed</span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
          <p className="text-xs text-purple-300">
            💡 <strong>Pro tip:</strong> Bookmark this page and return on your computer for the full interactive experience!
          </p>
        </div>

        <Button 
          variant="outline" 
          className="mt-6 border-gray-600 text-gray-300 hover:bg-gray-800"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </Card>
    </div>
  );
};

export default MobileMessage;
