import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Settings,
  List,
  Search,
  Folder,
  Tv,
  Radio,
  Film,
  Globe,
  Heart,
  SkipBack,
  SkipForward,
  RotateCcw
} from 'lucide-react';

interface Channel {
  name: string;
  url: string;
  logo?: string;
  group?: string;
  country?: string;
}

const IPTVPlayer = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [showChannelList, setShowChannelList] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showImportDialog, setShowImportDialog] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sample IPTV channels for demo
  const sampleChannels: Channel[] = [
    {
      name: "Big Buck Bunny",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      group: "Movies",
      country: "International"
    },
    {
      name: "Elephant Dream",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      group: "Movies",
      country: "International"
    },
    {
      name: "Sintel",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      group: "Movies",
      country: "International"
    }
  ];

  useEffect(() => {
    setChannels(sampleChannels);
    
    // Listen for playlist file opening
    if (window.electronAPI) {
      window.electronAPI.onOpenPlaylist((event: any, filePath: string) => {
        loadPlaylist(filePath);
      });
    }

    return () => {
      if (window.electronAPI) {
        window.electronAPI.removeAllListeners('open-playlist');
      }
    };
  }, []);

  const handleFileImport = () => {
    if (window.electronAPI) {
      // Electron version - this would be handled by the menu
      console.log('Use File menu to import playlist');
    } else {
      // Web version - use file input
      fileInputRef.current?.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (content) {
          const parsedChannels = parseM3U(content);
          setChannels(parsedChannels);
          setShowImportDialog(false);
        }
      };
      reader.readAsText(file);
    }
  };

  const loadPlaylist = async (filePath: string) => {
    if (!window.electronAPI) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await window.electronAPI.readFile(filePath);
      if (result.success) {
        const parsedChannels = parseM3U(result.content);
        setChannels(parsedChannels);
      } else {
        setError(`Failed to load playlist: ${result.error}`);
      }
    } catch (err) {
      setError('Failed to load playlist file');
    } finally {
      setIsLoading(false);
    }
  };

  const parseM3U = (content: string): Channel[] => {
    const lines = content.split('\n');
    const channels: Channel[] = [];
    let currentChannel: Partial<Channel> = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('#EXTINF:')) {
        // Parse channel info
        const nameMatch = line.match(/,(.+)$/);
        const groupMatch = line.match(/group-title="([^"]+)"/);
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        
        currentChannel = {
          name: nameMatch ? nameMatch[1] : 'Unknown Channel',
          group: groupMatch ? groupMatch[1] : 'Uncategorized',
          logo: logoMatch ? logoMatch[1] : undefined
        };
      } else if (line && !line.startsWith('#') && currentChannel.name) {
        // This is the URL line
        currentChannel.url = line;
        channels.push(currentChannel as Channel);
        currentChannel = {};
      }
    }

    return channels;
  };

  const playChannel = (channel: Channel) => {
    setCurrentChannel(channel);
    setError(null);
    setIsLoading(true);
    
    if (videoRef.current) {
      videoRef.current.src = channel.url;
      videoRef.current.load();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const toggleFavorite = (channelName: string) => {
    setFavorites(prev => 
      prev.includes(channelName) 
        ? prev.filter(name => name !== channelName)
        : [...prev, channelName]
    );
  };

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'All' || channel.group === selectedGroup;
    const matchesFavorites = selectedGroup === 'Favorites' ? favorites.includes(channel.name) : true;
    return matchesSearch && (selectedGroup === 'Favorites' ? matchesFavorites : matchesGroup);
  });

  const groups = ['All', 'Favorites', ...Array.from(new Set(channels.map(ch => ch.group || 'Uncategorized')))];

  const getChannelIcon = (group?: string) => {
    switch (group?.toLowerCase()) {
      case 'movies': return Film;
      case 'sports': return Tv;
      case 'news': return Globe;
      case 'music': return Radio;
      default: return Tv;
    }
  };

  const nextChannel = () => {
    if (!currentChannel || channels.length === 0) return;
    const currentIndex = channels.findIndex(ch => ch.name === currentChannel.name);
    const nextIndex = (currentIndex + 1) % channels.length;
    playChannel(channels[nextIndex]);
  };

  const previousChannel = () => {
    if (!currentChannel || channels.length === 0) return;
    const currentIndex = channels.findIndex(ch => ch.name === currentChannel.name);
    const prevIndex = currentIndex === 0 ? channels.length - 1 : currentIndex - 1;
    playChannel(channels[prevIndex]);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Channel List Sidebar */}
      <div className={`${showChannelList ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-800 border-r border-gray-700`}>
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <List className="w-5 h-5 mr-2" />
              Channels ({filteredChannels.length})
            </h2>
            <button
              onClick={() => setShowChannelList(false)}
              className="p-1 hover:bg-gray-700 rounded"
            >
              ×
            </button>
          </div>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search channels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Group Filter */}
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {groups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>

        {/* Channel List */}
        <div className="flex-1 overflow-y-auto">
          {isLoading && (
            <div className="p-4 text-center text-gray-400">
              Loading playlist...
            </div>
          )}
          
          {filteredChannels.map((channel, index) => {
            const IconComponent = getChannelIcon(channel.group);
            const isActive = currentChannel?.name === channel.name;
            const isFavorite = favorites.includes(channel.name);
            
            return (
              <div
                key={index}
                className={`p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-blue-600 hover:bg-blue-700' : ''
                }`}
                onClick={() => playChannel(channel)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <IconComponent className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium truncate">{channel.name}</div>
                      <div className="text-xs text-gray-400 truncate">{channel.group}</div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(channel.name);
                    }}
                    className={`p-1 rounded ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Player Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-800 p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {!showChannelList && (
                <button
                  onClick={() => setShowChannelList(true)}
                  className="p-2 hover:bg-gray-700 rounded-lg"
                >
                  <List className="w-5 h-5" />
                </button>
              )}
              <div className="flex items-center space-x-2">
                <Tv className="w-5 h-5 text-blue-400" />
                <span className="font-medium">
                  {currentChannel ? currentChannel.name : 'No channel selected'}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleFileImport}
                className="p-2 hover:bg-gray-700 rounded-lg"
                title="Import M3U Playlist"
              >
                <Folder className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hidden file input for web version */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".m3u,.m3u8,.txt"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Import Dialog */}
        {showImportDialog && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Import M3U Playlist</h3>
              <p className="text-gray-400 mb-4">
                Select an M3U or M3U8 playlist file to load your IPTV channels.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Choose File
                </button>
                <button
                  onClick={() => setShowImportDialog(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Player */}
        <div className="flex-1 relative bg-black">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-center">
                <RotateCcw className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-red-500 mb-4">{error}</p>
                <button
                  onClick={() => currentChannel && playChannel(currentChannel)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            onPlay={() => {
              setIsPlaying(true);
              setIsLoading(false);
              setError(null);
            }}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              setError('Failed to load stream');
              setIsLoading(false);
            }}
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
          />

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p>Loading stream...</p>
              </div>
            </div>
          )}

          {!currentChannel && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-center">
                <Tv className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Select a channel to start watching</p>
                <p className="text-gray-600 text-sm mt-2">Click the folder icon to import your M3U playlist</p>
                <button
                  onClick={handleFileImport}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg flex items-center mx-auto"
                >
                  <Folder className="w-4 h-4 mr-2" />
                  Import Playlist
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={previousChannel}
                className="p-2 hover:bg-gray-700 rounded-lg"
                disabled={!currentChannel}
              >
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={togglePlay}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full"
                disabled={!currentChannel}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextChannel}
                className="p-2 hover:bg-gray-700 rounded-lg"
                disabled={!currentChannel}
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button onClick={toggleMute} className="p-2 hover:bg-gray-700 rounded-lg">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20"
                />
              </div>
              
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-gray-700 rounded-lg"
                disabled={!currentChannel}
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPTVPlayer;
