import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { downloadData } from '../data/downloads';
import styles from './downloads.module.css';

function DownloadCard({ project, projectKey }) {
  const [showAllVersions, setShowAllVersions] = useState(false);
  const latestVersion = project.downloads[0];
  const otherVersions = project.downloads.slice(1);

  return (
    <div className={styles.downloadCard}>
      <div className={styles.projectHeader}>
        <h2 className={styles.projectName}>{project.name}</h2>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.latestInfo}>
          <span className={styles.latestVersion}>最新版本: {project.latestVersion}</span>
          <span className={styles.latestDate}>发布日期: {project.latestDate}</span>
        </div>
      </div>

      {/* 最新版本下载区域 */}
      <div className={styles.latestDownload}>
        <h3 className={styles.sectionTitle}>最新版本下载</h3>
        <div className={styles.fileList}>
          {latestVersion.files.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              <div className={styles.fileInfo}>
                <span className={styles.fileName}>{file.name}</span>
                {file.info && <span className={styles.fileInfoText}>{file.info}</span>}
                {file.size && <span className={styles.fileSize}>{file.size}</span>}
              </div>
              <Link
                className="button button--primary button--lg"
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                下载
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.changelog}>
          <h4>更新日志:</h4>
          <ul>
            {latestVersion.changelog.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 历史版本区域 */}
      {otherVersions.length > 0 && (
        <div className={styles.historyVersions}>
          <button
            className={styles.toggleButton}
            onClick={() => setShowAllVersions(!showAllVersions)}
          >
            {showAllVersions ? '隐藏' : '查看'}历史版本 ({otherVersions.length})
          </button>
          
          {showAllVersions && (
            <div className={styles.versionList}>
              {otherVersions.map((version, index) => (
                <div key={index} className={styles.versionItem}>
                  <div className={styles.versionHeader}>
                    <h4>版本 {version.version}</h4>
                    <span className={styles.versionDate}>{version.date}</span>
                  </div>
                  <div className={styles.fileList}>
                    {version.files.map((file, fileIndex) => (
                      <div key={fileIndex} className={styles.fileItem}>
                        <div className={styles.fileInfo}>
                          <span className={styles.fileName}>{file.name}</span>
                          {file.info && <span className={styles.fileInfoText}>{file.info}</span>}
                          {file.size && <span className={styles.fileSize}>{file.size}</span>}
                        </div>
                        <Link
                          className="button button--secondary button--sm"
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          下载
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className={styles.changelog}>
                    <h5>更新日志:</h5>
                    <ul>
                      {version.changelog.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Downloads() {
  return (
    <Layout
      title="下载中心"
      description="Hart_GS 作品下载中心"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.pageHeader}>
              <h1>下载中心</h1>
              <p className={styles.pageDescription}>
                在这里下载 Hart_GS 的作品
              </p>
            </div>

            <div className={styles.downloadsContainer}>
              {Object.entries(downloadData).map(([key, project]) => (
                <DownloadCard 
                  key={key} 
                  project={project} 
                  projectKey={key}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}