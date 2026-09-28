import React, { useState } from 'react';
import { ThumbsUp, Heart, Star, CheckCircle, MessageSquare, Plus, Send } from 'lucide-react';
import { ReviewItem } from '../types';

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'Suraj Chauhan',
    avatar: 'SC',
    comment: 'Purchased it great! Received instant link via email. First time I purchased anything from Facebook',
    likes: 124,
    timeAgo: '2h ago',
    verified: true,
    platform: 'Android',
  },
  {
    id: '2',
    author: 'Lucky Khare',
    avatar: 'LK',
    comment: 'Very good collection 🔥 100',
    likes: 89,
    timeAgo: '4h ago',
    verified: true,
    platform: 'Windows',
  },
  {
    id: '3',
    author: 'Fritzee Das',
    avatar: 'FD',
    comment: 'Very nice collection 💯 works smoothly without any VPN on Jio 5G',
    likes: 56,
    timeAgo: '6h ago',
    verified: true,
    platform: 'Android',
  },
  {
    id: '4',
    author: 'Nanak Grover',
    avatar: 'NG',
    comment: 'Received the links immediately. Thank you! 🙌 Already edited 3 videos for my YouTube channel.',
    likes: 112,
    timeAgo: '12h ago',
    verified: true,
    platform: 'Windows',
  },
  {
    id: '5',
    author: 'Priya Sharma',
    avatar: 'PS',
    comment: 'Auto captions in Hindi and English generated flawlessly. Best ₹299 spent!',
    likes: 74,
    timeAgo: '1d ago',
    verified: true,
    platform: 'iOS',
  },
];

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<'all' | 'Android' | 'Windows' | 'iOS'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newPlatform, setNewPlatform] = useState<'Android' | 'Windows' | 'iOS'>('Android');

  const toggleLike = (id: string) => {
    setLikesMap((prev) => {
      const isLiked = !prev[id];
      setReviews((currentReviews) =>
        currentReviews.map((r) =>
          r.id === id ? { ...r, likes: isLiked ? r.likes + 1 : r.likes - 1 } : r
        )
      );
      return { ...prev, [id]: isLiked };
    });
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: Date.now().toString(),
      author: newAuthor.trim(),
      avatar: newAuthor.trim().slice(0, 2).toUpperCase(),
      comment: newComment.trim(),
      likes: 1,
      timeAgo: 'Just now',
      verified: true,
      platform: newPlatform,
    };

    setReviews([newRev, ...reviews]);
    setNewAuthor('');
    setNewComment('');
    setShowAddModal(false);
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter((r) => r.platform === filter);

  return (
    <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Section Title matching screenshot */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white max-w-lg mb-2">
        What Our Customers Say <br />
        <span className="text-cyan-400">After Using.</span>
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6">
        Verified feedback from video editors, digital creators, and freelancers across India and worldwide.
      </p>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-[#141628] rounded-xl border border-slate-800 mb-6 text-xs font-medium">
        {(['all', 'Android', 'Windows', 'iOS'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3 py-1.5 rounded-lg transition-all capitalize ${
              filter === tab
                ? 'bg-cyan-500 text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab === 'all' ? 'All Reviews' : tab}
          </button>
        ))}
      </div>

      {/* Smartphone Mockup with Social Comments Feed */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/17.5] bg-black rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.3)] border-4 border-slate-700/80 ring-1 ring-purple-500/30">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#151528] border border-slate-700" />
        </div>

        {/* Screen canvas */}
        <div className="w-full h-full rounded-[36px] bg-[#121422] overflow-hidden flex flex-col justify-between text-left relative border border-slate-800">
          {/* Header */}
          <div className="p-3 pt-6 border-b border-slate-800/80 bg-[#16182c]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">Comments</span>
                <span className="text-[10px] text-slate-400 font-mono">(1,429)</span>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-1 text-[10px] font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/30 hover:bg-cyan-900/50"
              >
                <Plus className="w-3 h-3" /> Add Review
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">
              Everything you Need for Video Creation &amp; Graphics
            </p>
          </div>

          {/* Comments List (Scrollable) */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 divide-y divide-slate-800/60 text-xs">
            {filteredReviews.map((rev) => (
              <div key={rev.id} className="pt-2.5 first:pt-0">
                <div className="flex items-start gap-2.5">
                  {/* User Avatar */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0 shadow-sm">
                    {rev.avatar}
                  </div>

                  {/* Comment Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-white text-[11px]">{rev.author}</span>
                        {rev.verified && (
                          <CheckCircle className="w-3 h-3 text-cyan-400 fill-cyan-950" />
                        )}
                      </div>
                      <span className="text-[9px] text-slate-500">{rev.timeAgo}</span>
                    </div>

                    <p className="text-slate-200 text-[11px] mt-1 leading-relaxed">
                      {rev.comment}
                    </p>

                    {/* Actions: Like, Reply, Platform badge */}
                    <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-400">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleLike(rev.id)}
                          className={`flex items-center gap-1 transition-colors ${
                            likesMap[rev.id] ? 'text-pink-400 font-bold' : 'hover:text-white'
                          }`}
                        >
                          <Heart
                            className={`w-3 h-3 ${likesMap[rev.id] ? 'fill-pink-500' : ''}`}
                          />
                          <span>{rev.likes}</span>
                        </button>
                        <span className="hover:text-slate-200 cursor-pointer">Reply</span>
                      </div>
                      {rev.platform && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800/80 text-cyan-300">
                          {rev.platform}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar: Trust Rating */}
          <div className="p-2.5 bg-[#0f101d] border-t border-slate-800 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
              <span className="text-white font-bold ml-1">4.9 / 5</span>
            </div>
            <span className="text-emerald-400 font-semibold">100% Verified Purchases</span>
          </div>
        </div>
      </div>

      {/* Add Review Quick Dialog */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-[#16182a] border border-cyan-500/30 rounded-2xl p-5 text-left shadow-2xl">
            <h4 className="text-base font-bold text-white mb-2">Share Your Experience</h4>
            <p className="text-xs text-slate-400 mb-4">
              Leave your feedback on CapCut Pro instant delivery and workflow.
            </p>
            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                  Device Platform
                </label>
                <select
                  value={newPlatform}
                  onChange={(e) => setNewPlatform(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="Android">Android Phone / Tablet</option>
                  <option value="Windows">Windows PC / Laptop</option>
                  <option value="iOS">iPhone / iPad / Mac</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                  Review Comment
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Write how fast you received the link and how smoothly it works..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send className="w-3 h-3" /> Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
