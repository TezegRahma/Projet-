/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VOJw9MEXHzN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from 'react';


export default function ReglementInterne() {
  const [userRole, setUserRole] = useState(null);
 
 
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Fetch rules from your Django API
    const fetchRules = async () => {
      try {
        const response = await fetch('http://localhost:8000/documentation/reglement_loi_circulaire/');
        if (!response.ok) {
          throw new Error('Failed to fetch rules');
        }
        const data = await response.json();
        setRules(data);
      } catch (error) {
        console.error('Error fetching rules:', error.message);
      }
    };

    fetchRules();
  }, []);

  
 
 


  return (
    <div>
      <div className="text-4xl font-bold mb-8 text-center pt-20"> Reglement Interieur</div>
      
        <div className="space-y-6">
        
        </div>
        <div className="space-y-6">
        <div className="mb-4 text-center">Liste des règlements</div>
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <li key={index}>
            <div className="border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold mb-8 text-center ">{rule.titre}</div>
                  <div>{rule.description}</div>
                </div>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    </div>
  );
}
