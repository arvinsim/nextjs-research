'use client'
import {useState} from "react";
import Favorites from "@/articles/Favorites";

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="p-6">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tab1' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        onClick={() => setActiveTab('tab1')}
                    >
                        Favorites
                    </button>
                    <button
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tab2' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        onClick={() => setActiveTab('tab2')}
                    >
                        Viewed
                    </button>
                </nav>
            </div>
            <div className="mt-6">
                {activeTab === 'tab1' && <Favorites />}
                {activeTab === 'tab2' && <div>Content for Tab 2</div>}
            </div>
        </div>
    );
}