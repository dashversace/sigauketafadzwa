import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Copy, Check } from 'lucide-react';

const CODE_SNIPPETS = [
  {
    title: "Multimodal CNN Feature Extractor (Python)",
    language: "python",
    code: `import torch
import torch.nn as nn
import torchvision.models as models

class BroilerVisionModel(nn.Module):
    def __init__(self, num_classes=3):
        super(BroilerVisionModel, self).__init__()
        self.backbone = models.resnet50(pretrained=True)
        self.backbone.fc = nn.Linear(self.backbone.fc.in_features, 256)
        self.classifier = nn.Sequential(
            nn.ReLU(),
            nn.Dropout(0.4),
            nn.Linear(256, num_classes)
        )

    def forward(self, img_tensor):
        features = self.backbone(img_tensor)
        logits = self.classifier(features)
        return torch.softmax(logits, dim=1)`
  },
  {
    title: "Asynchronous SMC Order Block Engine (Python)",
    language: "python",
    code: `async def evaluate_market_structure(tick_data, threshold=0.0002):
    highs = tick_data['high'].rolling(window=5).max()
    lows = tick_data['low'].rolling(window=5).min()
    
    choch_detected = (tick_data['close'] > highs.shift(1))
    if choch_detected.iloc[-1]:
        return {"signal": "BULLISH_BREAK_OF_STRUCTURE", "status": "READY_EXECUTION"}
    return {"signal": "CONSOLIDATION", "status": "MONITORING"}`
  }
];

export const CodeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="font-mono text-xs text-[#C5A880] tracking-widest">[EXTRAORDINARY FEATURE]</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#F2EBDD] mt-2">
            Under the <span className="italic font-light text-[#C5A880]">Hood</span>
          </h2>
        </div>
        <p className="text-[#858585] text-sm max-w-sm mt-4 md:mt-0 font-light">
          Inspect production-grade algorithms and neural network architectures written for my machine learning and algorithmic systems.
        </p>
      </div>

      <div className="bg-[#121212] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex border-b border-[#222222] bg-[#1a1a1a] overflow-x-auto">
          {CODE_SNIPPETS.map((snippet, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-4 font-mono text-xs tracking-wider border-r border-[#222222] transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === idx ? 'bg-[#080808] text-[#C5A880] border-b-2 border-b-[#C5A880]' : 'text-[#858585] hover:text-[#F2EBDD]'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>{snippet.title}</span>
            </button>
          ))}
          <button
            onClick={handleCopy}
            className="ml-auto px-4 py-2 my-auto mr-4 bg-[#080808] hover:bg-[#222222] text-[#858585] hover:text-[#F2EBDD] border border-[#222222] rounded font-mono text-xs flex items-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="p-6 bg-[#080808] overflow-x-auto">
          <pre className="font-mono text-xs text-[#F2EBDD] leading-relaxed">
            <code>{CODE_SNIPPETS[activeTab].code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};