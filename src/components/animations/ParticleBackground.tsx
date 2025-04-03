'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  speed?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 1000,
  particleColor = '#00A3FF',
  particleSize = 2,
  speed = 0.001
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // 创建场景
    const scene = new THREE.Scene();
    
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // 添加渲染器到DOM
    containerRef.current.appendChild(renderer.domElement);
    
    // 创建粒子
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    // 创建材质
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(particleColor),
      size: particleSize,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // 创建粒子系统
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // 处理窗口大小变化
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      
      // 旋转粒子系统
      particleSystem.rotation.x += speed;
      particleSystem.rotation.y += speed * 0.8;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // 清理THREE.js资源
      particles.dispose();
      particleMaterial.dispose();
    };
  }, [particleCount, particleColor, particleSize, speed]);
  
  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ParticleBackground; 